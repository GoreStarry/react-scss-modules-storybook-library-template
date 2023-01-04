import { defineComponent } from "vue";
import sty from "./button.module.scss";
import cx from "classnames";

export default defineComponent({
  name: "Jsx",
  props: {
    label: {
      type: String,
    },
  },
  render({ label }) {
    return (
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
