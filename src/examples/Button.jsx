// import { ref } from "vue-demi";
import sty from "./button.module.scss";
import cx from "classnames";

export default {
  name: "my-button",
  props: {
    label: { type: String, default: "123" },
  },
  setup({ label }, { slots }) {
    console.log(label);
    return {
      label,
    };
  },
  render() {
    return (
      <button
        className={cx(
          sty["storybook-button"],
          sty["storybook-button--primary"]
        )}
      >
        {this.label}
      </button>
    );
  },
};
