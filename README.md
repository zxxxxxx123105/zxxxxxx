# 抖音账号运营助手

合规运营工作台，使用 Next.js、TypeScript 和 PostgreSQL。

## 功能范围

- 评论关键词规则与提醒
- 回复草稿由账号本人审核
- 24 小时试用记录与到期状态
- 不包含自动关注、自动私信或绕过平台规则的逻辑

## 本地启动

```bash
cp .env.example .env
docker compose up -d
npm install
npm run db:push
npm run dev
```

访问 `http://localhost:3000`。
