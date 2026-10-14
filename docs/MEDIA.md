# Media provenance

All four videos are the original files in:
https://github.com/jsuppe/netpak64/releases/tag/showcase-2026-10-12

Screenshots are individual ffmpeg frame extractions, resized to 1200px wide.
No scene content was generated, repaired, or removed. All known driving/camera
limitations still apply. Gallery captions identify the source recording and time.

- `race-grid.jpg`: `netpak64-v76-native-ai-race.mp4`, 00:04.
- `race-corner.jpg`: same, 00:15.
- `race-lap.jpg`: same, 00:28.
- `battle-start.jpg`: `netpak64-four-player-battle.mp4`, 00:03.
- `battle-arena.jpg`: same, 00:07.
- `battle-action.jpg`: same, 00:11.
- `lockstep-hud.jpg`: `netpak64-two-player-lockstep.mp4`, 00:35.
- `lobby-menu.jpg`: `netpak64-lobby-flow.mp4`, 01:50 (already racing).

Video posters are copied from the existing public NetPak64 showcase.

The shell/mushroom/star/banana SVG icons are original website artwork.
At the user's explicit request, the site now uses the actual in-game MK64 logo
and the original eight character portraits, sourced from Super Mario Wiki:
https://www.mariowiki.com/Gallery:Mario_Kart_64

- Logo: https://www.mariowiki.com/File:MK64InGameTitle.png
- Portraits: `File:MK64_icon_Mario.png`, `Luigi`, `Peach`, `Toad`, `Yoshi`,
  `DK`, `Wario`, and `Bowser` (same filename pattern).

These game images belong to Nintendo/their respective owners; they are not
original site artwork or assets licensed under the font licenses below.
Russo One and Press Start 2P font files are from Google Fonts and are redistributed
under the accompanying SIL Open Font License files.


## v77 recordings and screenshots

Current release: https://github.com/jsuppe/netpak64/releases/tag/showcase-v77

- Host-view clip: run 3, 90 seconds from 00:10–01:40 of the uncut 210-second
  host capture; 30 fps. Native CPU control, no controller bar, emulator chrome cropped.
- Four-peer clip: run 1, 90 seconds from 00:45–02:15 of the uncut 240-second
  four-peer capture; 15 fps, game views cropped and downscaled to a 1200x912 grid.
- `v77-player-view.jpg`: host capture 00:12.
- `v77-player-corner.jpg`: host capture 01:10.
- `v77-four-peer-early.jpg`: full four-peer capture 00:20.
- `v77-four-peer-lap2.jpg`: full four-peer capture 01:25.
- `v77-four-peer-late.jpg`: full four-peer capture 02:15.

All new screenshots are actual frames. No generated driving, speed-up cuts,
collision removal, or interpolated motion. The clips are silent. All newer
claim scope and telemetry limits are recorded in QA-V77.md.

## v77 menu walkthrough — October 13, 2026

`menus.html` adds fresh product-ROM captures in `assets/menus/` (750×570).
Source ROM MD5: `ce94c976521b215d7b4dee0b7151beeb`; commit `eed638611`.
Captured in NetPak64-enabled ares against a local UDP relay. A debugger selected
ONLINE for initial setup and injected N64 button edges at real menu handlers.
No ROM/source changes were made. Normal game code handled room creation,
listing, joining, START, character/course selection, ready/go and quit.
The guest was held briefly to expose the host’s ready-wait overlay.
These are actual framebuffer captures, not recreated menus or generated art.
Only emulator chrome is cropped (source rectangle x=10, y=44, 750×570); JPEG
compression is the only additional transformation. Raw PNGs and capture scripts
are retained in `/home/melchior/dev/mk64-menu-capture-v77/` on the capture host.

- `title-version`, `online-mode`: return from QUIT, title version stamp and 1P ONLINE.
- `online`, `name-entry`, `join-code`: main online menu and editable fields.
- `host-class`, `host-battle`, `visibility`: host rules and visibility selection.
- `find-empty`, `find-listed`: empty list and actual locally hosted public room.
- `host-roster`, `guest-lobby`: same two-peer room, respective lobby viewpoints.
- `character-select`, `course-select`, `battle-arena-select`: real selection screens.
- `waiting-host`, `waiting-players`: host-course and synchronized-start overlays.
- `online-start-menu`, `online-quit-menu`: local online overlay, both cursor options.

The temporary room code is from this local capture session. The pages document
N64 controls, not verified emulator keyboard bindings. Spectator/replay camera
controls are source-checked; this capture session does not qualify those modes.
