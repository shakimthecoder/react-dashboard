import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";import Header from "./header";
}

const Layout = ({ children}) => {
  return (
    <ThemedLayoutV2
      Header={Header}>
      title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
      {children}
    </ThemedLayoutV2>)
    }

export default Layout;