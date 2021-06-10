<script lang="js">

export default {
    props: {
        modifier: {
            type: String,
            validator: (value) => (['alt-primary', 'info', 'danger'].indexOf(value) !== -1),
            required: false
        },
        rounded: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
	<button id="root" v-bind:class="[modifier, rounded && 'rounded']">
		<slot />
	</button>
</template>

<style lang="sass">
//-| Theme Colors |-//
$primaryColor: #696969
$primaryAltColor: #FE8D57
$secondaryColor: #b8b7b7
$secondaryAltColor: #a0a0a0

//-| Basic Colors |-//
$blackColor: #000
$whiteColor: #fff

//-| Validation Colors |-//
$dangerColor: #cb1616
$successColor: #1c9e18

//-| Highlights Colors |-//
$linkColor: #2287cb
$smallHighlightColor: #fec6aa
$buttonHighlightColor: #F26522

//-| Background Colors |-//
$appBackgroundColor: #f6f6f6
$appBackgroundColorDarker: #F0F0F0
$cardsBackgroundColor: $whiteColor
$formsBackgroundColor: #d3d3d3
$cardBackgroundColor: $whiteColor

//-| Menu Colors |-//
$menuBackgroundColor: #FAF7F5
$menuTextColorStrong: #101010

//-| Foreground Colors |-//
$appForegroundColor: $whiteColor

//-| Text Color |-//
$appTextColor: $primaryColor
$appTextColorStrong: #101010

//-| Inputs Colors |-//
$disableInputColor: $secondaryColor
$inputTextColor: $primaryColor

//-| Border Colors |-//
$borderColorDisabled: $secondaryColor
$borderColor: $secondaryColor
$borderColorDarker: #D6D6D6

//-| Other Colors |-//
$appThemeColor: $primaryAltColor

//-| Display Flex Mixin |-//
=flex-settings($direction: row)
  display: flex
  flex-direction: $direction

//-| Flex Alignment Mixin |-//
=flex-alignment($align: center, $justify: center)
  align-items: $align
  justify-content: $justify

//-| Inputs & Buttons Sizes |-//
$buttonHeight: 36px

//-| Border Radius |-//
$buttonBorderRadius: 15px

#root
    +flex-settings()
    +flex-alignment()
    text-align: center
    height: $buttonHeight
    padding: 10px 20px
    box-sizing: border-box
    border: 0
    // border-radius: 0
    box-shadow: 0px 2px 3px #00000029
    outline: none

    // font-size: 14px
    text-transform: uppercase
    text-decoration: none
    letter-spacing: 0px

    color: $whiteColor
    background: $buttonHighlightColor

    transition: all 0.35s ease
    cursor: pointer

    &:disabled
        background-color: $secondaryColor
        box-shadow: 0px 1px 2px #00000029

    &:enabled
        //-| Hover |-//
        &:hover
            box-shadow: 0px 5px 6px #00000029

        //-| Focus |-//
        &:focus
            background-color: $primaryAltColor
            box-shadow: 0px 0px 7px #13ACCC

        //-| Clicked |-//
        &:active
            background-color: $primaryAltColor
            box-shadow: none

    &.alt-primary
        background-color: $whiteColor
        color: $buttonHighlightColor

        &:disabled
            color: $whiteColor
            background-color: $secondaryColor
            box-shadow: 0px 1px 2px #00000029

        &:enabled
            //-| Hover |-//
            &:hover
                box-shadow: 0px 5px 6px #00000029

            //-| Focus |-//
            &:focus
                background-color: $whiteColor
                color: $buttonHighlightColor
                box-shadow: 0px 0px 7px #13ACCC

            //-| Clicked |-//
            &:active
                background-color: $whiteColor
                color: $buttonHighlightColor
                border: 1px solid #D3D3D3
                box-shadow: none


    &.info
        background: $appBackgroundColor
        color: $primaryColor

        &:disabled
            background-color: $secondaryColor
            color: $whiteColor

        &:enabled
            //-| Hover |-//
            &:hover
                background-color: $appBackgroundColor
                color: #707070
                box-shadow: 0px 5px 6px #00000029

            //-| Focus |-//
            &:focus
                background-color: $appBackgroundColor
                color: $primaryColor
                box-shadow: 0px 0px 7px #13ACCC

            //-| Clicked |-//
            &:active
                color: $primaryColor
                background-color: $appBackgroundColor
                box-shadow: none

    &.danger
        background: $dangerColor
        color: $appForegroundColor

.rounded
  border-radius: $buttonBorderRadius !important
  padding: 0 1em
</style>
