# 使用官方 Nginx 作为基础镜像（轻量、高性能）
FROM nginx:alpine

# 构建阶段（可选：如果你不想依赖本地 build）
# 如果你已在 CI 中构建，可跳过此阶段，直接 COPY dist/
# 但推荐在 Docker 内构建，保证环境一致

# ---- 构建阶段（推荐）----
FROM node:20-alpine AS builder
# 先拷贝依赖清单（利于缓存）COPY package*.json ./    
# 安装生产依赖 RUN npm ci --only=production

WORKDIR /app
COPY package*.json ./    
RUN npm ci --only=production
COPY . .
RUN npm run build

# ---- 生产阶段 ----
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制自定义 nginx 配置（支持 SPA 路由）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]