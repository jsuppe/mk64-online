# Separate MK64 player-facing showcase

Date: 2026-10-13. Status: proposed site brief; no new website deployed.
Depends on [driving/camera qualification](MK64-DRIVING-AUTOMATION-PLAN.md).

## Audience and promise

For MK64 players: show what playing together looks like, what currently works,
and how to try it. Lead with familiar gameplay, not register maps or lockstep jargon.
Working title: **Mario Kart 64 Online — NetPak64 project**. Unofficial fan project;
do not imply Nintendo affiliation or retail-ready hardware support.

Keep the existing NetPak64 site as the engineering/device showcase. Create a
separate independently navigable MK64 site with its own homepage, assets, captions,
and deployment target. A working local prototype can use a separate directory;
final repository/domain selection is a release decision, not a planning blocker.

## Information architecture

1. Home: one clear gameplay proposition, a verified normal chase-camera hero clip,
   and calls to action: Watch a race / See supported play / Setup guide.
2. Gameplay: race and Battle sections, real player-perspective clips, supported
   participant counts, courses/rules, and clearly labeled automation.
3. How to play: prerequisites, lawful user-owned game sourcing, compatible builds,
   controls, host/join steps, and troubleshooting. Publish only tested instructions;
   if public onboarding is not ready, say so instead of offering a fake Play button.
4. Current status: concise Supported / Experimental / Planned lists, version/date,
   known gameplay/camera limitations, and emulator versus physical-hardware status.
5. Updates and community: changelog, issue-report instructions, and existing
   approved community links. Do not invent invite URLs.
6. About: brief project explanation and link to the deeper NetPak64 engineering site.

## Footage rules

- Hero footage is the normal active-player experience. No debug overlays or
  continuous orbit cameras; a four-peer comparison is secondary evidence.
- Label footage as human-controlled, controller-input automation, or native CPU
  participation; state course, mode, build, and capture date.
- Battle footage must show actual encounters/balloon gameplay, not karts roaming.
- Show countdown, meaningful play, and results in at least one complete reference
  run. Edited highlights link to their uncut qualifying evidence.
- Older clips with bad driving/cameras stay out of the hero; if retained, label them
  development footage with known defects. Never describe them as corrected gameplay.
- Distinguish connected players from CPU field size and relay room capacity.
- Do not claim real-console support until a physical end-to-end run is verified.

## Design and accessibility

Mobile-first, readable HUD/video sizing, keyboard-accessible controls, explicit
play buttons, no autoplay audio, reduced-motion support, poster images and captions.
Use an original visual identity rather than extracted Nintendo game assets for UI.
Keep source/build hashes and frame counts in expandable evidence details; the main
page answers player questions in plain language.

## Release sequence and acceptance

1. Build the independent site shell locally, with honest placeholder/status copy.
2. Add qualified two/four-player race media and tested onboarding when available.
3. Add Battle only after arena-specific qualification; add other modes separately.
4. Verify navigation, mobile readability, accessibility, media playback, links,
   and every factual claim against the coverage ledger before publishing.

Done means a player can understand the experience, identify supported setups,
watch authentic-looking play, and find the next real step without reading the
network-device specification. Creating the site is separate from proving gameplay.
