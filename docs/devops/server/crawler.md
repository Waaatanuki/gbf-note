# 爬虫部署

## 服务器硬件配置

- 付费类型：按量付费
- 地域：日本东京
- CPU：2核心
- 内存：8GB
- 系统盘：40GB
- 公网带宽：按使用流量 5Mbps
- 操作系统：Ubuntu 24.04 LTS

## SSH连接

```sh
# 1.安全组设置
安全组是否开放 22 端口

# 2.测试vscode连接
ssh -v root@xxx.xxx.xxx.xxx

# 3.拷贝私钥到服务器
scp ~/.ssh/xxx root@xxx:~/.ssh/

# 4.设置私钥权限(可选)
chmod 600 ~/.ssh/xxx

# 5.测试github连接
ssh -i ~/.ssh/xxx -T git@github.com
```

## 部署

```sh
# 1.克隆代码
git clone git@github.com:Waaatanuki/gbf-crawler.git

# 2.安装全局依赖
npm i -g pnpm pm2 @antfu/ni

# 3.安装Chrome依赖
sudo apt update
sudo apt install -y ca-certificates fonts-liberation libasound2t64 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

# 4.安装项目依赖
cd gbf-crawler
ni

# 5.设置pm2日志轮转
pm2 install pm2-logrotate

# 6.启动项目
nr start
```

## 运维

```sh
# 1.查看项目日志
pm2 logs
pm2 flush  # 清空所有日志

# 2.查看应用状态
pm2 list  # 查看所有运行的应用
pm2 show <app-name/id>  # 查看指定应用的详细信息（如日志路径、PID）
pm2 status  # 简洁版状态查看

# 3.重启 / 重载 / 停止 / 删除应用
pm2 restart <app-name/id/all>  # 重启应用（all表示所有）
pm2 reload <app-name/id/all>   # 重载应用（集群模式下无缝重启，零停机）
pm2 stop <app-name/id/all>     # 停止应用
pm2 delete <app-name/id/all>   # 删除应用（从PM2列表中移除）

# 4.配置日志轮转
1. pm2 set pm2-logrotate:max_size 10M
设置单个日志文件的最大大小限制为 10MB。当日志文件达到这个大小后，插件会自动触发日志轮转（切割），生成新的日志文件，避免单个日志文件过大。
2. pm2 set pm2-logrotate:retain 30
设置日志文件的保留数量为 30 个。超过这个数量的旧日志文件会被自动删除，防止日志文件过多占用磁盘空间。
3. pm2 set pm2-logrotate:compress false
设置是否对轮转后的旧日志文件进行压缩（默认通常为true）。这里设为false表示不压缩，日志文件会以原始格式（如.log）保存；若为true，则会压缩为.gz格式。
4. pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
设置轮转日志文件的日期命名格式。例如，轮转后的日志文件会命名为类似app-2025-11-21_15-30-45.log的形式，便于按时间识别日志文件。
5. pm2 set pm2-logrotate:workerInterval 30
设置插件的检查间隔为 30 秒。插件会每隔 30 秒检查一次日志文件大小、是否达到轮转时间等条件，决定是否触发轮转。
6. pm2 set pm2-logrotate:rotateInterval 0 0 * * *
设置定时轮转的 Cron 表达式，这里0 0 * * *表示每天凌晨 0 点 0 分强制触发一次日志轮转（即使日志文件未达到max_size）。Cron 格式为：分 时 日 月 周。
7. pm2 set pm2-logrotate:rotateModule true
设置是否对 PM2 自身的模块日志（如 PM2 的启动日志、管理日志）也进行轮转。设为true表示 PM2 自身的日志也会按照上述规则轮转；false则仅轮转应用日志。
```
