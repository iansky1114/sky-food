( function($) {

	if($( 'input[id="s"]' ).length){
		$( 'input[id="s"]' )
			.typeahead( {
				name: 'search',
				remote: wp_typeahead.ajaxurl + '?action=ajax_search&post_type=all&fn=get_ajax_search&terms=%QUERY',
				template: [
					'<p><a href="{{url}}">{{value}}</a></p>',
				].join(''),
				engine: Hogan
			} )
			.on('typeahead:selected', function(el,v){
				window.location = v.url;
			});
	}

	if($( 'input[id="s2"]' ).length){
		$( 'input[id="s2"]' )
			.typeahead( {
				name: 'search-2',
				local: [{value:"::after",url:"/codrops/codrops_reference/after"},{value:"::before",url:"/codrops/codrops_reference/before"},{value:"<color>",url:"/codrops/codrops_reference/color_value"},{value:"<position>",url:"/codrops/codrops_reference/position_value"},{value:":left",url:"/codrops/codrops_reference/left_pseudo-class"},{value:":right",url:"/codrops/codrops_reference/right_pseudo-class"},{value:"::selection",url:"/codrops/codrops_reference/selection"},{value:":active",url:"/codrops/codrops_reference/active"},{value:":blank",url:"/codrops/codrops_reference/blank"},{value:":checked",url:"/codrops/codrops_reference/checked"},{value:":default",url:"/codrops/codrops_reference/default"},{value:":dir",url:"/codrops/codrops_reference/dir"},{value:":disabled",url:"/codrops/codrops_reference/disabled"},{value:":empty",url:"/codrops/codrops_reference/empty"},{value:":enabled",url:"/codrops/codrops_reference/enabled"},{value:":first",url:"/codrops/codrops_reference/first"},{value:":first-child",url:"/codrops/codrops_reference/first-child"},{value:"::first-letter",url:"/codrops/codrops_reference/first-letter"},{value:"::first-line",url:"/codrops/codrops_reference/first-line"},{value:":first-of-type",url:"/codrops/codrops_reference/first-of-type"},{value:":focus",url:"/codrops/codrops_reference/focus"},{value:":fullscreen",url:"/codrops/codrops_reference/fullscreen"},{value:":hover",url:"/codrops/codrops_reference/hover"},{value:":in-range",url:"/codrops/codrops_reference/in-range"},{value:":indeterminate",url:"/codrops/codrops_reference/indeterminate"},{value:":invalid",url:"/codrops/codrops_reference/invalid"},{value:":lang",url:"/codrops/codrops_reference/lang"},{value:":last-child",url:"/codrops/codrops_reference/last-child"},{value:":last-of-type",url:"/codrops/codrops_reference/last-of-type"},{value:":link",url:"/codrops/codrops_reference/link"},{value:":not()",url:"/codrops/codrops_reference/not"},{value:":nth-child",url:"/codrops/codrops_reference/nth-child"},{value:":nth-last-child",url:"/codrops/codrops_reference/nth-last-child"},{value:":nth-last-of-type",url:"/codrops/codrops_reference/nth-last-of-type"},{value:":nth-of-type",url:"/codrops/codrops_reference/nth-of-type"},{value:":only-child",url:"/codrops/codrops_reference/only-child"},{value:":only-of-type",url:"/codrops/codrops_reference/only-of-type"},{value:":optional",url:"/codrops/codrops_reference/optional"},{value:":out-of-range",url:"/codrops/codrops_reference/out-of-range"},{value:":read-only",url:"/codrops/codrops_reference/read-only"},{value:":read-write",url:"/codrops/codrops_reference/read-write"},{value:":required",url:"/codrops/codrops_reference/required"},{value:":root",url:"/codrops/codrops_reference/root"},{value:":scope",url:"/codrops/codrops_reference/scope"},{value:":target",url:"/codrops/codrops_reference/target"},{value:":valid",url:"/codrops/codrops_reference/valid"},{value:":visited",url:"/codrops/codrops_reference/visited"},{value:"@charset",url:"/codrops/codrops_reference/charset"},{value:"@document",url:"/codrops/codrops_reference/document"},{value:"@font-face",url:"/codrops/codrops_reference/font-face"},{value:"@import",url:"/codrops/codrops_reference/import"},{value:"@keyframes",url:"/codrops/codrops_reference/keyframes"},{value:"@media",url:"/codrops/codrops_reference/media"},{value:"@namespace",url:"/codrops/codrops_reference/namespace"},{value:"@page",url:"/codrops/codrops_reference/page"},{value:"@supports",url:"/codrops/codrops_reference/supports"},{value:"<angle>",url:"/codrops/codrops_reference/angle"},{value:"<basic-shape>",url:"/codrops/codrops_reference/basic-shape"},{value:"<frequency>",url:"/codrops/codrops_reference/frequency"},{value:"<gradient>",url:"/codrops/codrops_reference/gradient"},{value:"<image>",url:"/codrops/codrops_reference/image"},{value:"<integer>",url:"/codrops/codrops_reference/integer"},{value:"<length>",url:"/codrops/codrops_reference/length"},{value:"<number>",url:"/codrops/codrops_reference/number"},{value:"<percentage>",url:"/codrops/codrops_reference/percentage"},{value:"<ratio>",url:"/codrops/codrops_reference/ratio"},{value:"<resolution>",url:"/codrops/codrops_reference/resolution"},{value:"<string>",url:"/codrops/codrops_reference/string"},{value:"<time>",url:"/codrops/codrops_reference/time"},{value:"<timing-function>",url:"/codrops/codrops_reference/timing-function"},{value:"<uri>",url:"/codrops/codrops_reference/uri"},{value:"<user-ident>",url:"/codrops/codrops_reference/user-ident"},{value:"animation",url:"/codrops/codrops_reference/animation"},{value:"animation-delay",url:"/codrops/codrops_reference/animation-delay"},{value:"animation-direction",url:"/codrops/codrops_reference/animation-direction"},{value:"animation-duration",url:"/codrops/codrops_reference/animation-duration"},{value:"animation-fill-mode",url:"/codrops/codrops_reference/animation-fill-mode"},{value:"animation-iteration-count",url:"/codrops/codrops_reference/animation-iteration-count"},{value:"animation-name",url:"/codrops/codrops_reference/animation-name"},{value:"animation-play-state",url:"/codrops/codrops_reference/animation-play-state"},{value:"animation-timing-function",url:"/codrops/codrops_reference/animation-timing-function"},{value:"backface-visibility",url:"/codrops/codrops_reference/backface-visibility"},{value:"background",url:"/codrops/codrops_reference/background"},{value:"background-attachment",url:"/codrops/codrops_reference/background-attachment"},{value:"background-clip",url:"/codrops/codrops_reference/background-clip"},{value:"background-color",url:"/codrops/codrops_reference/background-color"},{value:"background-image",url:"/codrops/codrops_reference/background-image"},{value:"background-origin",url:"/codrops/codrops_reference/background-origin"},{value:"background-position",url:"/codrops/codrops_reference/background-position"},{value:"background-repeat",url:"/codrops/codrops_reference/background-repeat"},{value:"background-size",url:"/codrops/codrops_reference/background-size"},{value:"border-bottom-color",url:"/codrops/codrops_reference/border-bottom-color"},{value:"border-bottom-left-radius",url:"/codrops/codrops_reference/border-bottom-left-radius"},{value:"border-bottom-right-radius",url:"/codrops/codrops_reference/border-bottom-right-radius"},{value:"border-bottom-style",url:"/codrops/codrops_reference/border-bottom-style"},{value:"border-bottom-width",url:"/codrops/codrops_reference/border-bottom-width"},{value:"border-collapse",url:"/codrops/codrops_reference/border-collapse"},{value:"border-color",url:"/codrops/codrops_reference/border-color"},{value:"border-image",url:"/codrops/codrops_reference/border-image"},{value:"border-image-outset",url:"/codrops/codrops_reference/border-image-outset"},{value:"border-image-repeat",url:"/codrops/codrops_reference/border-image-repeat"},{value:"border-image-slice",url:"/codrops/codrops_reference/border-image-slice"},{value:"border-image-source",url:"/codrops/codrops_reference/border-image-source"},{value:"border-image-width",url:"/codrops/codrops_reference/border-image-width"},{value:"border-left-color",url:"/codrops/codrops_reference/border-left-color"},{value:"border-left-style",url:"/codrops/codrops_reference/border-left-style"},{value:"border-left-width",url:"/codrops/codrops_reference/border-left-width"},{value:"border-radius",url:"/codrops/codrops_reference/border-radius"},{value:"border-right-color",url:"/codrops/codrops_reference/border-right-color"},{value:"border-right-style",url:"/codrops/codrops_reference/border-right-style"},{value:"border-right-width",url:"/codrops/codrops_reference/border-right-width"},{value:"border-spacing",url:"/codrops/codrops_reference/border-spacing"},{value:"border-style",url:"/codrops/codrops_reference/border-style"},{value:"border-top-color",url:"/codrops/codrops_reference/border-top-color"},{value:"border-top-left-radius",url:"/codrops/codrops_reference/border-top-left-radius"},{value:"border-top-right-radius",url:"/codrops/codrops_reference/border-top-right-radius"},{value:"border-top-style",url:"/codrops/codrops_reference/border-top-style"},{value:"border-top-width",url:"/codrops/codrops_reference/border-top-width"},{value:"border-width",url:"/codrops/codrops_reference/border-width"},{value:"bottom",url:"/codrops/codrops_reference/bottom"},{value:"box-shadow",url:"/codrops/codrops_reference/box-shadow"},{value:"box-sizing",url:"/codrops/codrops_reference/box-sizing"},{value:"break-after",url:"/codrops/codrops_reference/break-after"},{value:"break-before",url:"/codrops/codrops_reference/break-before"},{value:"break-inside",url:"/codrops/codrops_reference/break-inside"},{value:"calc()",url:"/codrops/codrops_reference/calc"},{value:"caption-side",url:"/codrops/codrops_reference/caption-side"},{value:"clear",url:"/codrops/codrops_reference/clear"},{value:"clip",url:"/codrops/codrops_reference/clip"},{value:"clip-path",url:"/codrops/codrops_reference/clip-path"},{value:"color",url:"/codrops/codrops_reference/color"},{value:"column-count",url:"/codrops/codrops_reference/column-count"},{value:"column-fill",url:"/codrops/codrops_reference/column-fill"},{value:"column-gap",url:"/codrops/codrops_reference/column-gap"},{value:"column-rule",url:"/codrops/codrops_reference/column-rule"},{value:"column-rule-color",url:"/codrops/codrops_reference/column-rule-color"},{value:"column-rule-style",url:"/codrops/codrops_reference/column-rule-style"},{value:"column-rule-width",url:"/codrops/codrops_reference/column-rule-width"},{value:"column-span",url:"/codrops/codrops_reference/column-span"},{value:"column-width",url:"/codrops/codrops_reference/column-width"},{value:"columns",url:"/codrops/codrops_reference/columns"},{value:"content",url:"/codrops/codrops_reference/content"},{value:"Counters",url:"/codrops/codrops_reference/counters"},{value:"cursor",url:"/codrops/codrops_reference/cursor"},{value:"direction",url:"/codrops/codrops_reference/direction"},{value:"display",url:"/codrops/codrops_reference/display"},{value:"empty-cells",url:"/codrops/codrops_reference/empty-cells"},{value:"filter",url:"/codrops/codrops_reference/filter"},{value:"float",url:"/codrops/codrops_reference/float"},{value:"font",url:"/codrops/codrops_reference/font"},{value:"font-family",url:"/codrops/codrops_reference/font-family"},{value:"font-size",url:"/codrops/codrops_reference/font-size"},{value:"font-size-adjust",url:"/codrops/codrops_reference/font-size-adjust"},{value:"font-stretch",url:"/codrops/codrops_reference/font-stretch"},{value:"font-style",url:"/codrops/codrops_reference/font-style"},{value:"font-synthesis",url:"/codrops/codrops_reference/font-synthesis"},{value:"font-variant",url:"/codrops/codrops_reference/font-variant"},{value:"font-weight",url:"/codrops/codrops_reference/font-weight"},{value:"hanging-punctuation",url:"/codrops/codrops_reference/hanging-punctuation"},{value:"height",url:"/codrops/codrops_reference/height"},{value:"hyphens",url:"/codrops/codrops_reference/hyphens"},{value:"inherit",url:"/codrops/codrops_reference/inherit"},{value:"initial",url:"/codrops/codrops_reference/initial"},{value:"justify-content",url:"/codrops/codrops_reference/justify-content"},{value:"left",url:"/codrops/codrops_reference/left"},{value:"letter-spacing",url:"/codrops/codrops_reference/letter-spacing"},{value:"line-height",url:"/codrops/codrops_reference/line-height"},{value:"linear-gradient()",url:"/codrops/codrops_reference/linear-gradient"},{value:"list-style",url:"/codrops/codrops_reference/list-style"},{value:"list-style-image",url:"/codrops/codrops_reference/list-style-image"},{value:"list-style-position",url:"/codrops/codrops_reference/list-style-position"},{value:"list-style-type",url:"/codrops/codrops_reference/list-style-type"},{value:"margin",url:"/codrops/codrops_reference/margin"},{value:"margin-bottom",url:"/codrops/codrops_reference/margin-bottom"},{value:"margin-left",url:"/codrops/codrops_reference/margin-left"},{value:"margin-right",url:"/codrops/codrops_reference/margin-right"},{value:"margin-top",url:"/codrops/codrops_reference/margin-top"},{value:"mask",url:"/codrops/codrops_reference/mask"},{value:"mask-border",url:"/codrops/codrops_reference/mask-border"},{value:"mask-border-mode",url:"/codrops/codrops_reference/mask-border-mode"},{value:"mask-border-outset",url:"/codrops/codrops_reference/mask-border-outset"},{value:"mask-border-repeat",url:"/codrops/codrops_reference/mask-border-repeat"},{value:"mask-border-slice",url:"/codrops/codrops_reference/mask-border-slice"},{value:"mask-border-source",url:"/codrops/codrops_reference/mask-border-source"},{value:"mask-border-width",url:"/codrops/codrops_reference/mask-border-width"},{value:"mask-clip",url:"/codrops/codrops_reference/mask-clip"},{value:"mask-composite",url:"/codrops/codrops_reference/mask-composite"},{value:"mask-image",url:"/codrops/codrops_reference/mask-image"},{value:"mask-mode",url:"/codrops/codrops_reference/mask-mode"},{value:"mask-origin",url:"/codrops/codrops_reference/mask-origin"},{value:"mask-position",url:"/codrops/codrops_reference/mask-position"},{value:"mask-repeat",url:"/codrops/codrops_reference/mask-repeat"},{value:"mask-size",url:"/codrops/codrops_reference/mask-size"},{value:"mask-type",url:"/codrops/codrops_reference/mask-type"},{value:"max-height",url:"/codrops/codrops_reference/max-height"},{value:"max-width",url:"/codrops/codrops_reference/max-width"},{value:"min-height",url:"/codrops/codrops_reference/min-height"},{value:"min-width",url:"/codrops/codrops_reference/min-width"},{value:"opacity",url:"/codrops/codrops_reference/opacity"},{value:"order",url:"/codrops/codrops_reference/order"},{value:"orphans",url:"/codrops/codrops_reference/orphans"},{value:"outline",url:"/codrops/codrops_reference/outline"},{value:"outline-color",url:"/codrops/codrops_reference/outline-color"},{value:"outline-offset",url:"/codrops/codrops_reference/outline-offset"},{value:"outline-style",url:"/codrops/codrops_reference/outline-style"},{value:"outline-width",url:"/codrops/codrops_reference/outline-width"},{value:"overflow",url:"/codrops/codrops_reference/overflow"},{value:"overflow-x",url:"/codrops/codrops_reference/overflow-x"},{value:"overflow-y",url:"/codrops/codrops_reference/overflow-y"},{value:"padding",url:"/codrops/codrops_reference/padding"},{value:"padding-bottom",url:"/codrops/codrops_reference/padding-bottom"},{value:"padding-left",url:"/codrops/codrops_reference/padding-left"},{value:"padding-right",url:"/codrops/codrops_reference/padding-right"},{value:"padding-top",url:"/codrops/codrops_reference/padding-top"},{value:"page-break-after",url:"/codrops/codrops_reference/page-break-after"},{value:"page-break-before",url:"/codrops/codrops_reference/page-break-before"},{value:"page-break-inside",url:"/codrops/codrops_reference/page-break-inside"},{value:"perspective",url:"/codrops/codrops_reference/perspective"},{value:"perspective-origin",url:"/codrops/codrops_reference/perspective-origin"},{value:"pointer-events",url:"/codrops/codrops_reference/pointer-events"},{value:"position",url:"/codrops/codrops_reference/position"},{value:"quotes",url:"/codrops/codrops_reference/quotes"},{value:"radial-gradient()",url:"/codrops/codrops_reference/radial-gradient"},{value:"repeating-linear-gradient()",url:"/codrops/codrops_reference/repeating-linear-gradient"},{value:"repeating-radial-gradient()",url:"/codrops/codrops_reference/repeating-radial-gradient"},{value:"resize",url:"/codrops/codrops_reference/resize"},{value:"right",url:"/codrops/codrops_reference/right"},{value:"shape-image-threshold",url:"/codrops/codrops_reference/shape-image-threshold"},{value:"shape-margin",url:"/codrops/codrops_reference/shape-margin"},{value:"shape-outside",url:"/codrops/codrops_reference/shape-outside"},{value:"tab-size",url:"/codrops/codrops_reference/tab-size"},{value:"table-layout",url:"/codrops/codrops_reference/table-layout"},{value:"text-align",url:"/codrops/codrops_reference/text-align"},{value:"text-align-last",url:"/codrops/codrops_reference/text-align-last"},{value:"text-decoration",url:"/codrops/codrops_reference/text-decoration"},{value:"text-decoration-color",url:"/codrops/codrops_reference/text-decoration-color"},{value:"text-decoration-line",url:"/codrops/codrops_reference/text-decoration-line"},{value:"text-decoration-style",url:"/codrops/codrops_reference/text-decoration-style"},{value:"text-indent",url:"/codrops/codrops_reference/text-indent"},{value:"text-justify",url:"/codrops/codrops_reference/text-justify"},{value:"text-overflow",url:"/codrops/codrops_reference/text-overflow"},{value:"text-rendering",url:"/codrops/codrops_reference/text-rendering"},{value:"text-shadow",url:"/codrops/codrops_reference/text-shadow"},{value:"text-transform",url:"/codrops/codrops_reference/text-transform"},{value:"top",url:"/codrops/codrops_reference/top"},{value:"transform",url:"/codrops/codrops_reference/transform"},{value:"transform-origin",url:"/codrops/codrops_reference/transform-origin"},{value:"transform-style",url:"/codrops/codrops_reference/transform-style"},{value:"transition",url:"/codrops/codrops_reference/transition"},{value:"transition-delay",url:"/codrops/codrops_reference/transition-delay"},{value:"transition-duration",url:"/codrops/codrops_reference/transition-duration"},{value:"transition-property",url:"/codrops/codrops_reference/transition-property"},{value:"transition-timing-function",url:"/codrops/codrops_reference/transition-timing-function"},{value:"unicode-bidi",url:"/codrops/codrops_reference/unicode-bidi"},{value:"vertical-align",url:"/codrops/codrops_reference/vertical-align"},{value:"visibility",url:"/codrops/codrops_reference/visibility"},{value:"white-space",url:"/codrops/codrops_reference/white-space"},{value:"widows",url:"/codrops/codrops_reference/widows"},{value:"width",url:"/codrops/codrops_reference/width"},{value:"will-change",url:"/codrops/codrops_reference/will-change"},{value:"word-break",url:"/codrops/codrops_reference/word-break"},{value:"word-spacing",url:"/codrops/codrops_reference/word-spacing"},{value:"word-wrap",url:"/codrops/codrops_reference/word-wrap"},{value:"z-index",url:"/codrops/codrops_reference/z-index"},{value:"counter-increment",url:"/codrops/codrops_reference/counter-increment"},{value:"counter-reset",url:"/codrops/codrops_reference/counter-reset"},{value:"hsl()",url:"/codrops/codrops_reference/hsl"},{value:"hsla()",url:"/codrops/codrops_reference/hsla"},{value:"matrix()",url:"/codrops/codrops_reference/matrix"},{value:"matrix3d()",url:"/codrops/codrops_reference/matrix3d"},{value:"rotate()",url:"/codrops/codrops_reference/rotate"},{value:"rotate3d()",url:"/codrops/codrops_reference/rotate3d"},{value:"attr()",url:"/codrops/codrops_reference/attr"},{value:"circle()",url:"/codrops/codrops_reference/circle"},{value:"ellipse()",url:"/codrops/codrops_reference/ellipse"},{value:"inset()",url:"/codrops/codrops_reference/inset"},{value:"polygon()",url:"/codrops/codrops_reference/polygon"},{value:"rgb()",url:"/codrops/codrops_reference/rgb"},{value:"rgba()",url:"/codrops/codrops_reference/rgba"},{value:"rotateX()",url:"/codrops/codrops_reference/rotatex"},{value:"rotateY()",url:"/codrops/codrops_reference/rotatey"},{value:"rotateZ()",url:"/codrops/codrops_reference/rotatez"},{value:"scale()",url:"/codrops/codrops_reference/scale"},{value:"scale3d()",url:"/codrops/codrops_reference/scale3d"},{value:"scaleX()",url:"/codrops/codrops_reference/scalex"},{value:"scaleY()",url:"/codrops/codrops_reference/scaley"},{value:"skew()",url:"/codrops/codrops_reference/skew"},{value:"skewX()",url:"/codrops/codrops_reference/skewx"},{value:"skewY()",url:"/codrops/codrops_reference/skewy"},{value:"translate()",url:"/codrops/codrops_reference/translate"},{value:"translate3d()",url:"/codrops/codrops_reference/translate3d"},{value:"translateX()",url:"/codrops/codrops_reference/translatex"},{value:"translateY()",url:"/codrops/codrops_reference/translatey"},{value:"translateZ()",url:"/codrops/codrops_reference/translatez"},{value:"border",url:"/codrops/codrops_reference/border"},{value:"border-bottom",url:"/codrops/codrops_reference/border-bottom"},{value:"border-left",url:"/codrops/codrops_reference/border-left"},{value:"border-right",url:"/codrops/codrops_reference/border-right"},{value:"border-top",url:"/codrops/codrops_reference/border-top"},{value:"<blend-mode>",url:"/codrops/codrops_reference/blend-mode"},{value:"background-blend-mode",url:"/codrops/codrops_reference/background-blend-mode"},{value:"mix-blend-mode",url:"/codrops/codrops_reference/mix-blend-mode"},{value:"isolation",url:"/codrops/codrops_reference/isolation"},{value:"object-fit",url:"/codrops/codrops_reference/object-fit"},{value:"object-position",url:"/codrops/codrops_reference/object-position"},{value:"::placeholder",url:"/codrops/codrops_reference/placeholder"},{value:"Media Queries",url:"/codrops/codrops_reference/media-queries"},{value:"appearance",url:"/codrops/codrops_reference/appearance"},{value:"Attribute Selectors",url:"/codrops/codrops_reference/attribute-selectors"}],
				remote: wp_typeahead.ajaxurl + '?action=ajax_search&fn=get_ajax_search&post_type=css_reference&terms=%QUERY',
				template: [
					'<p><a href="{{url}}">{{value}}</a></p>',
				].join(''),
				engine: Hogan
			} )
			.on('typeahead:selected', function(el,v){
				window.location = v.url;
			});
	}


} )(jQuery);
