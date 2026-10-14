# MK64 showcase: driving automation project plan

Date: 2026-10-13. Status: proposed work plan, not a validation verdict.
Companion: [player-facing showcase brief](MK64-PLAYER-SHOWCASE-BRIEF.md).

## 1. Objectives and non-goals

- Demonstrate believable MK64 play, not merely synchronized moving objects.
- Automated participants start, navigate, use items, recover, and complete the
  intended race or battle without persistent wall contact or unexplained idling.
- Every active player sees their own kart through the normal MK64 chase camera.
  Spectator, replay, intro, and finish cameras are distinct, explicitly labeled modes.
- Keep human controls, physics, collisions, items, HUD, and race rules representative
  of the product ROM. Automation must not disguise product defects.
- Produce repeatable scenario runs with separate simulation, driving, camera,
  orchestration, and media verdicts; publish only evidence that passes all relevant gates.
- Build an MK64-player-focused showcase separate from the NetPak64 engineering site.

Not objectives: superhuman lap records, zero legitimate kart/item contact, an
AI research project for its own sake, or claims about untested hardware/modes.
Ordinary racing contact is acceptable; repeated inability to negotiate a corner is not.

## 2. Evidence and issue register

Sources: the prior conversation, 2026-10-12/13 project notes, v76 commit
`544147a8a`, current `src/net_race.c` and `src/camera.c`, and existing showcase copy.
The current videos have not been re-reviewed frame by frame during this planning pass.
Source comments describe historical defects, not proof that every defect remains active.

### Driving automation

- Historical: custom waypoint steering caused wall-grinding, corner overshoot,
  recovery/reverse loops, and off-map excursions. The v5 code comments describe
  v4 reverse-arc recovery clipping through wall corners.
- Historical: injection during staging fought the game's grid-placement movement.
- Current user report: drivers still repeatedly hit walls or do not drive.
- v76 uses native CPU AI for race automation; Battle retains waypoint control.
  Native race AI is a candidate baseline, not a demonstrated all-scenario solution.
- Battle needs arena navigation, opponent selection, item acquisition/use,
  obstacle avoidance, and recovery; driving a race line is not adequate behavior.

### MK64 ROM / camera / simulation integration

- Current user report: camera continuously pans around the kart in four-view footage,
  unlike the normal active-player experience. This is a publication-blocking defect.
- v76 changes an automated slot from PLAYER_HUMAN to PLAYER_CPU using a shared
  lockstep marker. Test whether this changes camera/lifecycle behavior; causality
  is not yet established.
- `camera.c::func_8001EE98` selects cinematic paths using cinematic flags, demo
  state, and mode-specific state. Log those values rather than guessing from video.
- `net_race.c` documents earlier four-player camera mis-targeting, shared smoothing
  state, render-versus-simulation stepping, and render-side simulation mutations.
  Reproduce against the current build; comments alone cannot establish current status.
- Investigate AI initialization in multiplayer slots, terrain/collision update paths,
  player ownership, HUD mapping, finish transitions, and human takeover separately.
- v76 achieved 3,732 shared frames without divergence in one four-instance
  Mario Raceway run. That proves the compared state matched for that run; it
  does not prove camera correctness, full races, all courses, or good driving.

### Harness / capture / environment / evidence

- Historical: short run ended at the lobby START point, giving no race evidence.
- Historical: `vidcap.sh` stalled in room-code entry; attempted key recovery failed.
- Historical: stale absolute CMake paths after copying the build tree.
- Historical: missing ffmpeg, MP4 truncation at harness shutdown, and recording
  a single overlapping window before the four-view layout was ready.
- Current process issue: synchronization success was described as gameplay success;
  the earlier visual sign-off conflicts with the user's repeated observations.
- Model-provider interruptions delayed this discussion; unrelated to driving or ROM quality.

Classification rule: keep symptom, candidate cause, and confirmed cause separate.
Wall contact can originate in bad steering OR incorrect ROM collision/AI state.
An idle kart can originate in missing inputs, staging, lockstep wait, a finished racer,
or broken AI initialization. Camera defects are not steering defects by default.

## 3. Demonstration coverage

### Required public scenarios

1. Host/find/join/start: two and four peers; private room and public discovery
   where supported. Verify names, ownership, course choice, and coordinated countdown.
2. Two-player race: normal chase view for both peers, a complete standard-length
   race, items, final standings, and return/rematch.
3. Four-player race: validate every seat, including host rotation; show readable
   individual player footage plus a labeled four-peer comparison.
4. Four-player Battle: all four stock arenas—Big Donut, Block Fort, Double Deck,
   Skyscraper—with purposeful encounters, item use, balloon loss, elimination,
   end-of-match result, and normal active-player cameras.
5. Mixed human/automated session: a real human seat retains normal control and
   camera; distinguish injected-input automation from CPU participants.
6. Recovery and lifecycle: forced wall pin, off-track/Lakitu rescue where applicable,
   item spin/hit, pause/resume, finish, rematch, leave/drop, and CPU replacement
   only where the current product supports those paths.

### Course qualification ladder

- First acceptance course: Mario Raceway. Complete the standard product race,
  not only a shortened test lap. Stock races are normally three laps; record
  the actual configured rule set in every run manifest.
- Next stress set: Luigi Raceway (baseline), Koopa Troopa Beach (terrain/rescue),
  Choco Mountain (tight bends/elevation), Toad's Turnpike (traffic), Yoshi Valley
  (branching routes), Bowser's Castle (hazards), Rainbow Road (long run/railings).
- Before claiming all-course automation, qualify all 16 stock race courses with
  two and four peers and every participant seat. Add supported speed classes
  and mirror settings explicitly; do not silently infer coverage.
- Grand Prix, time trials, spectator/replay, late join, extra room capacity, adverse
  networking, and physical hardware are separate qualification tracks. Demonstrate
  only supported product behavior; unsupported tracks stay labeled experimental.
- Spectator/replay demonstrations, if included, must not substitute for an active
  player's camera or make a CPU view look like normal human play.

## 4. Test architecture and measurements

Freeze ROM/source revision, emulator revision, build flags, driver policy/version,
room/seat mapping, course, rules, seed, and capture configuration per run.
Keep the full uncut recording and a logical-frame-linked telemetry trace.

Log per participant: logical frame, player type/lifecycle flags, injected and applied
inputs (or CPU policy marker), speed, position, heading, route/path index, lap progress,
wall contact, rescue, item state/events, finish state, local camera target/mode,
camera heading relative to kart heading, and simulation hashes. Distinguish
simulation stalls from stopped karts; path indices alone are insufficient at branches.

Run a controlled comparison on the same course/rules where feasible:

- Product ROM with human control: player-experience reference.
- Existing deterministic recorded human inputs: repeatable integration reference.
- v76 native CPU takeover: investigate AI/player-type coupling.
- Controller-input automation retaining human player semantics: candidate alternative.
- Native CPU baseline in a stock mode that actually supports it: navigation reference,
  not a like-for-like substitute for multiplayer product behavior.

Prefer deterministic controller input if it preserves authentic human-facing behavior.
Keep native CPU driving only if camera, physics, lifecycle, items, and ownership can
be made correct without fragile flag tricks. Battle likely needs its own policy.
Choose after the comparison, not before. Do not fix camera by disabling real collisions
or by making per-console simulation state differ.

## 5. Proposed acceptance gates

These are initial engineering budgets to calibrate against normal human play;
they are not measurements already achieved.

- Driving: every intended racer finishes; no unexplained non-progress episode
  longer than 3 seconds, excluding recorded pause/wait/rescue/item/finish states.
  No sustained wall pin longer than 2 seconds or repeated failed recovery cycle.
- Quality: contact frequency and cumulative wall-contact time must not exceed
  a recorded ordinary-player reference budget established on each test course.
  Inspect recurring corner collisions even when a numerical budget passes.
- Recovery: forced recoverable pins resume forward progress within 5 seconds;
  rescue returns control correctly. No teleport, collision bypass, or off-map escape.
- Camera: correct local target for every seat; no unsolicited orbit/cinematic switch
  during active racing. Match ordinary chase behavior on straight, curve, skid,
  item-hit, incline, and pause/resume; allow legitimate stock camera responses.
- Simulation: no divergence across the entire scenario, with compared frame count
  and hash field coverage stated. Camera/render changes must not alter shared
  gameplay state, RNG, item outcomes, or collision behavior.
- Battle: every active bot navigates and seeks meaningful interactions; demonstrate
  item acquisition/use, balloon loss, and a valid outcome. No indefinite circling,
  stationary participants, unreachable-target obsession, or arena-edge loops.
- Repeatability: at least three consecutive full passing runs for each scenario
  configuration, using recorded distinct seeds; repeat all seats through host rotation.
- Human parity: mixed-session controls/HUD/camera remain correct, and the relevant
  human experience is checked using the product ROM, not just test flags.
- Media: camera, HUD, and seat labels readable; gameplay reaches the stated outcome;
  MP4 finalizes and plays in the delivered page. Automated driving is labeled.

Failure in any required column blocks that clip. A montage cannot hide a failing run.

## 6. Ordered work packages

### P0 — Reproduce and correct the evidence baseline

Archive current footage and build identities; timestamp wall/idle/orbit symptoms.
Record one product human run and one v76 automated run with matched conditions.
Deliverable: issue register with clips/frames, severity, reproduction, and owner
role (driver, ROM/camera, harness, or site). Gate: each symptom reproducible or
explicitly marked unreproduced; earlier broad gameplay sign-off withdrawn.

### P1 — Camera correctness and telemetry

Instrument camera mode/target and player flags; reproduce in two/four peers and
every seat. Compare CPU takeover with controller-driven human slots. Separate
local presentation context from shared gameplay state and test across micro-stalls.
Deliverable: root-cause report and a normal chase-camera regression.
Gate: authentic camera plus unchanged simulation results before hero recapture.

### P2 — Race driver selection and qualification

Run the controlled driver comparison; select the lowest-complexity policy that
passes player semantics and recovery gates. Qualify Mario Raceway full races,
then stress courses, then all-course coverage. Item behavior is a separate gate.
Deliverable: driver contract, repeatable scenario manifest, and pass/fail ledger.

### P3 — Battle-specific automation

Build arena-aware navigation and hazard/level connectivity; add opponent pursuit,
item strategy, avoidance, and bounded recovery. Start with Big Donut, then qualify
the other three arenas. Gate: valid matches and purposeful play, not just matching hashes.

### P4 — Lifecycle and orchestration

Unify capture around the proven runner; detect state transitions instead of fixed
menu sleeps. Bound waits with explicit failure reasons. Handle staging, pause,
results/rematch, supported drop behavior, and repeated runs. Arrange windows before
capture; finalize media before stopping emulators; validate file and page playback.
Deliverable: one reproducible command per scenario and structured failure output.

### P5 — Player showcase and publication

Build the separate MK64 site from the companion brief; capture only qualified
scenarios. Keep engineering evidence on the NetPak64 site and cross-link them.
Gate: claims map to qualified runs and all delivered media is verified.

Priority: orbit/target defects and persistent wall/idle failures are P0 publication
blockers. Harness failures are P1 reproducibility blockers. Site polish follows
camera/race qualification; battle claims wait for battle qualification.
Scope and estimates are refined after P0/P1; no completion date is implied here.

## 7. Definition of done

Every public demonstration has a reproducible manifest, complete passing run,
normal intended camera, meaningful driving, verified media, and accurate caption.
The player site clearly separates verified emulator play from experimental hardware,
supported modes from planned ones, and automated participants from human footage.
Missing coverage is visible; synchronization is never presented as gameplay quality.

## Planning-tool status

Loom requirements workflow was consulted, but its CLI cannot persist records in
this environment because `chromadb` is missing. This document is the durable
requirements/acceptance record for now; no Loom records were claimed as created.


## v77 execution checkpoint — 2026-10-13

Mario Raceway four-peer native CPU integration now has three full three-lap
runs, all 12 participant finishes, and no premature cinematic/finish samples.
9,241 / 7,664 / 8,040 shared frames compared without divergence. This addresses
one concrete ROM/test-lifecycle cause of the bad v76 footage; it is not an
all-scenarios driver/camera sign-off. The three-lap rule, AI participant finish
path, all-participant results wait, and diagnostic overlay fix are in game v77.
See [qualification report](QA-V77.md) and [participant metrics](v77-driving-results.json).
Other-course, Battle, human/mixed-session, and console work remain open.
