export const documentationInformation = [
  {
    id: 1,
    prefix: "withFlex",
    argumentsTitle: "Arguments",
    arguments: `1.display\n2.justify-content\n3.align-items\n4.flex-direction\n5.flex-wrap,\n6.gap`,
    exampleTitle: "Example",
    example:
      "@include withFlex($display: flex, $justify-content: space-between, $align-items: center, $flex-direction: column, $flex-wrap: wrap, $gap: 10px);"
  },
  {
    id: 2,
    prefix: "withGrid",
    argumentsTitle: "Arguments",
    arguments: [
      `1.columns (grid-template-columns)\n2.rows (grid-template-rows)\n3.gap (grid-gap / gap)\n4.justify\n5.align\n6.flow (grid-auto-flow)`
    ],
    exampleTitle: "Example",
    example:
      "@include withGrid($columns: repeat(3, 1fr), $rows: auto, $gap: 20px, $justify: center, $align: start, $flow: row);"
  },
  {
    id: 3,
    prefix: "withFont",
    argumentsTitle: "Arguments",
    arguments: [
      `1.font-family\n2.font-size\n3.white-space\n4.user-select copy text = true or false,\n5.font-weight\n6.line-height\n7.letter-spacing`
    ],
    exampleTitle: "Example",
    example: `@include withFont($font-family: "Arial, sans-serif", $font-size: 16px, $white-space: normal, $user-select: none, $font-weight: 400, $line-height: 1.5, $letter-spacing: 0);`
  },
  {
    id: 4,
    prefix: "withBackground",
    argumentsTitle: "Arguments",
    arguments: [`1.color\n2.repeat\n3.position\n4.size\n5.attachment(scroll, fixed, local)`],
    exampleTitle: "Example",
    example:
      "@include withBackground($color: #ffffff, $repeat: no-repeat, $position: center center, $size: cover, $attachment: scroll);"
  },
  {
    id: 5,
    prefix: "withBackgroundImage",
    argumentsTitle: "Arguments",
    arguments: [`1.image\n2-repeat\n3.position\n4.size\n5.attachment (scroll, fixed, local)\n6.blend-mode`],
    exampleTitle: "Example",
    example: `@include withBackgroundImage($image: url("/path/to/image.jpg"), $repeat: no-repeat, $position: center center, $size: cover, $attachment: scroll, $blend-mode: normal);`
  },
  {
    id: 6,
    prefix: "withBgFixedAndCenter",
    argumentsTitle: "Arguments",
    arguments: [
      `Centers element in viewport using fixed position, not Flex box position:\n1.fixed; top: 50%;\n2.left: 50%;\n3.transform: translate(-50%, -50%);\n4.$zIndex — optional z-index",`
    ],
    exampleTitle: "Example",
    example: "@include bgFixedAndCenter($zIndex: 100);"
  },
  {
    id: 7,
    prefix: "withBgFixedFocus",
    argumentsTitle: "Arguments",
    arguments: [`bgFixedFocus:\nfixed fullscreen overlay\n1.color\n2.zIndex`],
    exampleTitle: "Example",
    example: "@include bgFixedFocus($color: #000000, $zIndex: 9);"
  },
  {
    id: 8,
    prefix: "withPosition",
    argumentsTitle: "Arguments",
    arguments: [`withPosition: sets position and optional inset or individual offsets (top, right, bottom, left)`],
    exampleTitle: "Example",
    example:
      "@include withPosition($position: relative, $inset: auto, $top: auto, $right: auto, $bottom: auto, $left: auto);"
  },
  {
    id: 9,
    prefix: "withWidthHeight",
    argumentsTitle: "Arguments",
    arguments: [`widthHeight: sets width and height`],
    exampleTitle: "Example",
    example: "@include widthHeight($width: 1200px, $height: auto);"
  },
  {
    id: 10,
    prefix: "withButton",
    argumentsTitle: "Arguments",
    arguments: [
      `withButton mixin: \n1.fontFamily\n2.fontSize\n3.bgColor\n4.color\n5.textAlign\n6.border,\n7.padding\n8.margin\n9.borderRadius\n10.shadow\n11.width\n12.height\n13.transition\n`
    ],
    argumentsPart2: [
      `14.hoverBg,\n15-hoverColor\n16.hoverShadow\n17.hoverBorder\n18.hoverTransition\n19.activeBg\n20.activeColor\n21.activeShadow\n22.activeBorder\n23.activeTransition\n24.copyText (true/false — allows text selection)\n25.disabled (true — disables button, semi-transparent, non-clickable, ignores hover/active)`
    ],
    exampleTitle: "Example",
    example: `@include withButton(
      $fontFamily: 'Arial, sans-serif',
      $fontSize: 16px,
      $bgColor: #1e90ff,
      $color: #fff,
      $textAlign: center,
      $border: 1px solid #1e90ff,
      $padding: 10px 20px,
      $margin: 5px,
      $borderRadius: 8px,
      $shadow: 0 2px 5px rgba(0,0,0,0.15),
      $width: auto,
      $height: auto,
      $transition: all 0.3s ease,
      $hoverBg: #0d6efd,
      $hoverColor: #fff,
      $hoverShadow: 0 4px 8px rgba(0,0,0,0.2),
      $hoverBorder: 1px solid #0d6efd,
      $hoverTransition: all 0.3s ease,
      $activeBg: #0a58ca,
      $activeColor: #eaeaea,
      $activeShadow: inset 0 2px 4px rgba(0,0,0,0.3),
      $activeBorder: 1px solid #0a58ca,
      $activeTransition: all 0.2s ease,
      $copyText: true,
      $disabled: false
    );`
  },
  {
    id: 11,
    prefix: "withButtonFont",
    argumentsTitle: "Arguments",
    arguments: [`withButtonFont:\n1.font-family\n2.font-size\n3.color\n4.text-align`],
    exampleTitle: "Example",
    example: `@include withButtonFont($fontFamily: "Arial, sans-serif", $fontSize: 16px, $color: #000000, $textAlign: center);`
  },
  {
    id: 12,
    prefix: "withButtonBackground",
    argumentsTitle: "Arguments",
    arguments: [`withButtonBackground:\n1.bg-color\n2.border\n3.border-radius`],
    exampleTitle: "Example",
    example: `@include withButtonBackground($bgColor: #ffffff, $border: 1px solid #000000, $borderRadius: 4px);`
  },
  {
    id: 13,
    prefix: "withButtonBox",
    argumentsTitle: "Arguments",
    arguments: [`withButtonBox:\n1.padding\n2.margin\n3.width\n4.height`],
    exampleTitle: "Example",
    example: `@include withButtonBox($padding: 10px 20px, $margin: 0, $width: auto, $height: auto);`
  },
  {
    id: 14,
    prefix: "withButtonShadow",
    argumentsTitle: "Arguments",
    arguments: [`withButtonShadow:\n1.shadow`],
    exampleTitle: "Example",
    example: `@include withButtonShadow($shadow: 0 2px 4px rgba(0, 0, 0, 0.2));`
  },
  {
    id: 15,
    prefix: "withButtonTransition",
    argumentsTitle: "Arguments",
    arguments: [`withButtonTransition:\n1.transition`],
    exampleTitle: "Example",
    example: `@include withButtonTransition($transition: .3s ease-in);`
  },
  {
    id: 16,
    prefix: "withButtonDisabled",
    argumentsTitle: "Arguments",
    arguments: [`withButtonDisabled:\n1.disabled (true/false)`],
    exampleTitle: "Example",
    example: `@include withButtonDisabled($disabled: true);`
  },
  {
    id: 17,
    prefix: "withButtonHover",
    argumentsTitle: "Arguments",
    arguments: [`withButtonHover:\n1.hoverBg\n2.hoverColor\n3.hoverShadow\n4.hoverBorder\n5.hoverTransition`],
    exampleTitle: "Example",
    example: `@include withButtonHover($hoverBg: #f0f0f0, $hoverColor: #000000, $hoverShadow: 0 4px 6px rgba(0,0,0,0.2), $hoverBorder: 1px solid #000000, $hoverTransition: all 0.3s ease);`
  },
  {
    id: 18,
    prefix: "withButtonActive",
    argumentsTitle: "Arguments",
    arguments: [`withButtonActive:\n1.activeBg\n2.activeColor\n3.activeShadow\n4.activeBorder\n5.activeTransition`],
    exampleTitle: "Example",
    example: `@include withButtonActive($activeBg: #e0e0e0, $activeColor: #000000, $activeShadow: 0 2px 4px rgba(0,0,0,0.2), $activeBorder: 1px solid #000000, $activeTransition: all 0.2s ease);`
  },
  {
    id: 19,
    prefix: "withButtonCursor",
    argumentsTitle: "Arguments",
    arguments: [`withButtonCursor":\n1.copyText (true/false)`],
    exampleTitle: "Example",
    example: `@include withButtonCursor($copyText: true);`
  },
  {
    id: 20,
    prefix: "withTransform",
    argumentsTitle: "Arguments",
    arguments: [
      `1.withTransform — normal: transform for default state\n2.hover:transform on hover\n3.active: transform on active`
    ],
    exampleTitle: "Example",
    example: `@include withTransform($normal: none, $hover: scale(1.05), $active: scale(0.95));`
  },
  {
    id: 21,
    prefix: "withBorder",
    argumentsTitle: "Arguments",
    arguments: [`withBorder:\n1.border\n2.borderRadius\n3.outline`],
    exampleTitle: "Example",
    example: `@include withBorder($border: 1px solid #000000, $borderRadius: 4px, $outline: none);`
  },
  {
    id: 22,
    prefix: "withShadow",
    argumentsTitle: "Arguments",
    arguments: [`withShadow:\n1.boxShadow\n2.textShadow\n3.glow\n4.inset (true/false)`],
    exampleTitle: "Example",
    example: `@include withShadow($boxShadow: 0 2px 4px rgba(0,0,0,0.2), $textShadow: 1px 1px 2px rgba(0,0,0,0.2), $glow: 0 0 8px rgba(0,0,0,0.1), $inset: false);`
  },
  {
    id: 23,
    prefix: "withMedia",
    argumentsTitle: "Arguments",
    arguments: [`withMedia:\n1.maxWidth\n2.minWidth\n3.use content for nested styles`],
    exampleTitle: "Example",
    example: `@include withMedia($maxWidth: 800px, $minWidth: null){Content};`
  },
  {
    id: 24,
    prefix: "withReset",
    argumentsTitle: "Arguments",
    arguments: [`Hard reset of default browser styles`],
    exampleTitle: "Example",
    example: `@include withReset();`
  },
  {
    id: 25,
    prefix: "withContainer",
    argumentsTitle: "Arguments",
    arguments: [`withContainer:\n1.define your custom class\n2.max-width\n3.margin\n4.padding`],
    exampleTitle: "Example",
    example: `@include withContainer($class: "container", $max-width: 1300px, $margin: auto, $padding: 0 10px);`
  },
  {
    id: 26,
    prefix: "withSpace",
    argumentsTitle: "Arguments",
    arguments: [
      `1.margin\n2.padding\n3.mt(margin-top)\n4.mr(margin-right)\n5.mb(margin-bottom\n6.ml(margin-left)\n7.pt(padding-top)\n8.pr(padding-right)\n9.pb(padding-bottom)\n10.pl(padding-left)`
    ],
    exampleTitle: "Example",
    example: `@include withSpace($margin: null, $padding: null, $mt: null, $mr: null, $mb: null, $ml: null, $pt: null, $pr: null, $pb: null, $pl: null);`
  }
];
