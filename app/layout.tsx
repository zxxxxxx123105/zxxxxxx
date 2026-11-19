import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "抖音账号运营助手",
  description: "评论提醒、关键词规则与人工回复草稿工作台",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
