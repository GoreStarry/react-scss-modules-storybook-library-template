import { defineComponent } from "vue-demi";
import sty from "./button.module.scss";
import cx from "classnames";

export default defineComponent({
  props: {
    label: { type: String, default: "123" },
  },
  setup({ label }, { slots }) {
    return () => (
      <button
        className={cx(
          sty["storybook-button"],
          sty["storybook-button--primary"]
        )}
        type="button"
      >
        {label}
      </button>
    );
  },
});

const ButtonCounter = {
  name: "button-counter",
  props: ["count"],
  methods: {
    onClick() {
      this.$emit("change", this.count + 1);
    },
  },
  render() {
    return <button onClick={this.onClick}>数量 {this.count}+</button>;
  },
};
