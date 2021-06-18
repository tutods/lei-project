<script>
export default {
    props: {
        modifier: {
            type: String,
            validator: (value) => ["light"].indexOf(value) !== -1,
            required: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
            default: "text",
        },
    },
};
</script>

<template>
    <label class="root">
        <input
            v-bind:class="[
                modifier && `${modifier}-style`,
                rounded && 'rounded',
            ]"
            v-bind:type="type"
            v-bind:disabled="disabled"
            placeholder="&nbsp;"
        />

        <span class="label" v-if="placeholder">{{ placeholder }}</span>

        <svg class="state-icons" width="18px" height="18px" viewBox="0 0 20 20">
            <g>
                <path
                    stroke="none"
                    fill="#1c9e18"
                    d="M 9.5 1 C 4.813079833984375 1 1 4.813079833984375 1 9.5 C 1 14.18692016601562 4.813079833984375 18 9.5 18 C 14.18692016601562 18 18 14.18692016601562 18 9.5 C 18 4.813079833984375 14.18692016601562 1 9.5 1 M 9.5 0 C 14.74670028686523 0 19 4.253290176391602 19 9.5 C 19 14.74670028686523 14.74670028686523 19 9.5 19 C 4.253290176391602 19 0 14.74670028686523 0 9.5 C 0 4.253290176391602 4.253290176391602 0 9.5 0 Z"
                />
                <g transform="translate(7 7.026)">
                    <line
                        stroke="#1c9e18"
                        strokeLinecap="round"
                        y2="6"
                        transform="translate(5.448 0) rotate(34)"
                    />
                    <line
                        stroke="#1c9e18"
                        strokeLinecap="round"
                        x1="2.524"
                        y1="0.524"
                        transform="translate(0.293 3.128) rotate(34)"
                    />
                </g>
            </g>
            <g width="16px" height="16px">
                <g fill="none" strokeLinecap="round">
                    <path
                        stroke="none"
                        d="M9.5,0A9.5,9.5,0,1,1,0,9.5,9.5,9.5,0,0,1,9.5,0Z"
                    />
                    <path
                        stroke="none"
                        fill="#d52626"
                        d="M 9.5 1 C 4.813079833984375 1 1 4.813079833984375 1 9.5 C 1 14.18692016601562 4.813079833984375 18 9.5 18 C 14.18692016601562 18 18 14.18692016601562 18 9.5 C 18 4.813079833984375 14.18692016601562 1 9.5 1 M 9.5 0 C 14.74670028686523 0 19 4.253290176391602 19 9.5 C 19 14.74670028686523 14.74670028686523 19 9.5 19 C 4.253290176391602 19 0 14.74670028686523 0 9.5 C 0 4.253290176391602 4.253290176391602 0 9.5 0 Z"
                    />
                </g>
                <path
                    fill="none"
                    strokeLinecap="round"
                    stroke="#d52626"
                    d="M0,10V0"
                    transform="translate(6 13.142) rotate(-135)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    stroke="#d52626"
                    d="M0,10V0"
                    transform="translate(6.004 6.005) rotate(-45)"
                />
            </g>
        </svg>
    </label>
</template>

<style lang="sass">
//-| Animations |-//
$fastTransitionTime: 300ms
$fastEasingFunction: cubic-bezier(0.53, 0, 0.375, 1) !default
$regularTransitionTime: 500ms !default
$regularEasingFunction: cubic-bezier(0.53, 0, 0.375, 1) !default

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

//-| Background Colors |-//
$appBackgroundColor: #f6f6f6
$formsBackgroundColor: #d3d3d3

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

//-| Other Colors |-//
$appThemeColor: $primaryAltColor

//-| Inputs & Buttons Sizes |-//
$inputHeight: 40px
$buttonHeight: 36px

//-| Border Radius |-//
$inputBorderRadius: 25px

//-| Display Flex Mixin |-//
=flex-settings($direction: row)
  display: flex
  flex-direction: $direction

//-| Flex Alignment Mixin |-//
=flex-alignment($align: center, $justify: center)
  align-items: $align
  justify-content: $justify

//-| Fill Container Mixin |-//
=fill-container
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0


.root
    height: 40px
    position: relative
    margin-top: 40px

    .label
        position: absolute
        top: -40px

        padding: 12px 20px
        box-sizing: border-box

        font-family: 'Montserrat', sans-serif
        font-size: 13px
        font-weight: 500
        line-height: 13px
        cursor: text
        color: $secondaryColor

        // Animation
        transition: $fastTransitionTime $fastEasingFunction

    .state-icons
        position: absolute
        right: 10px
        top: 0
        transform: translateY(50%)

        width: 18px
        height: 18px

        pointer-events: none

        margin-left: 5px

        > *
            opacity: 0
            transition-property: opacity
            transition-duration: $fastTransitionTime
            transition-timing-function: $fastEasingFunction

    input[type=number]
        -moz-appearance: textfield

    //-| Icons only in input |-//
    input
        &:invalid:not(:placeholder-shown)
            &~ .state-icons > *:nth-child(2)
                opacity: 1

        &:valid:not(:placeholder-shown) ~ .state-icons > *:nth-child(1)
            opacity: 1


    textarea,
    input
        resize: none !important
        width: 100%
        height: $inputHeight

        +fill-container

        padding: 12px 20px
        box-sizing: border-box

        border-color: transparent
        box-shadow: 0px 1px 2px #00000029

        color: $secondaryColor
        background-color: $appBackgroundColor
        font-family: 'Montserrat', sans-serif
        font-size: 13px
        font-weight: 500

        &:invalid:not(:placeholder-shown)
            border: 1px solid $dangerColor

            &:hover,
            &:focus
                border: 1px solid $dangerColor

        &:hover,
        &:focus
            border: 1px solid $primaryColor

        &:placeholder-shown + .label
            top: 0px

        &:focus + .label
            top: -40px

        &:disabled
            background-color: $formsBackgroundColor
            color: $secondaryAltColor
            cursor: not-allowed

            &:hover
                border: 0

            & + .label
                pointer-events: none

        &.light-style
            background-color: $whiteColor

            &:hover
                border: 1px solid $secondaryColor

            &:focus
                outline: none
                border: 1px solid $secondaryColor

    .rounded
        border-radius: 100px !important
</style>
