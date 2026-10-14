# Menu walkthrough QA — 2026-10-13

- 19 actual v77 product-ROM captures, visually inspected against source labels.
- Two-peer local relay: public room creation, FIND GAME, guest join, host START,
  character selection, host map selection, guest course-wait and host ready-wait.
- Online local START overlay opened with an injected START edge; D-pad selection
  and A-confirm QUIT returned to the title. Version stamp and 1P ONLINE captured.
- Separate host Battle path reached the stock arena selector.
- Debugger setup and button injection disclosed in the guide and MEDIA.md.
- Website checked in Chromium at 1440, 390 and 320px: no horizontal overflow,
  no JS errors, all screenshot assets loaded, chapter anchors resolve.
- All 19 screenshot dialogs opened, images decoded, close restored focus.
  Escape dismissal also checked. Local guide links returned HTTP 200.
- Homepage navigation to guide checked at all three widths.
- N64 controls checked in net_menu.c, menus.c and net_race.c, commit eed638611.

Not covered: real PC controller mappings, WAN conditions, physical hardware,
spectator/replay runtime, mismatch/error reproduction, eight-player roster and
all-course/all-arena gameplay. Source-checked camera bindings are explicitly
separated from captured menu-flow evidence. No game source or ROM edits.
