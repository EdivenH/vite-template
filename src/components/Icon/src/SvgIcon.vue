<script lang="tsx">
import { computed, CSSProperties, defineComponent, useAttrs } from "vue";

const svgIconProps = () => ({
  name: String,
  prefix: {
    type: String,
    default: "icon",
  },
  color: String,
  size: {
    type: [Number, String],
    default: 16,
  },
});

const SvgIcon = defineComponent({
  name: "SvgIcon",
  props: svgIconProps(),
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    const attrs = useAttrs();

    const getStyle = computed((): CSSProperties => {
      const { size } = props;
      let s = `${size}`;
      s = `${s.replace("px", "")}px`;
      return {
        width: s,
        height: s,
      };
    });

    return () => {
      return (
        <svg
          aria-hidden="true"
          class={["svg-icon", attrs.class]}
          style={getStyle.value}
        >
          <use color={props.color} xlink:href={symbolId.value} />
        </svg>
      );
    };
  },
});

export default SvgIcon;
</script>
<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
