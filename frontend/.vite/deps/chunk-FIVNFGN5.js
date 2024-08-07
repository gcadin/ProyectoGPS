import {
  Anchor_default
} from "./chunk-6PVCFW64.js";
import {
  Button_default
} from "./chunk-YG3P5BXE.js";
import {
  SelectableContext_default,
  dataAttr,
  makeEventKey
} from "./chunk-7JF6KNL3.js";
import {
  useEventCallback
} from "./chunk-WAERY4PI.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-FHAMWGQN.js";
import {
  require_react
} from "./chunk-QY3QVPNU.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-bootstrap/esm/NavLink.js
var import_classnames = __toESM(require_classnames());
var React4 = __toESM(require_react());

// node_modules/@restart/ui/esm/NavItem.js
var React3 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/@restart/ui/esm/NavContext.js
var React = __toESM(require_react());
var NavContext = React.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

// node_modules/@restart/ui/esm/TabContext.js
var React2 = __toESM(require_react());
var TabContext = React2.createContext(null);
var TabContext_default = TabContext;

// node_modules/@restart/ui/esm/NavItem.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0, import_react.useContext)(SelectableContext_default);
  const navContext = (0, import_react.useContext)(NavContext_default);
  const tabContext = (0, import_react.useContext)(TabContext_default);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist")
      props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter))
      props["aria-controls"] = contextControlledId;
  }
  if (props.role === "tab") {
    props["aria-selected"] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
  }
  props.onClick = useEventCallback((e) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
var NavItem = React3.forwardRef((_ref, ref) => {
  let {
    as: Component = Button_default,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta.isActive;
  return (0, import_jsx_runtime.jsx)(Component, Object.assign({}, options, props, {
    ref
  }));
});
NavItem.displayName = "NavItem";
var NavItem_default = NavItem;

// node_modules/react-bootstrap/esm/NavLink.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var NavLink = React4.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor_default,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return (0, import_jsx_runtime2.jsx)(Component, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: (0, import_classnames.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
var NavLink_default = NavLink;

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react2 = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react2.useReducer)((state) => !state, false);
  return dispatch;
}

export {
  useForceUpdate,
  NavContext_default,
  TabContext_default,
  NavItem_default,
  NavLink_default
};
//# sourceMappingURL=chunk-FIVNFGN5.js.map
