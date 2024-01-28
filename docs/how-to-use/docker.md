---
title: How to use - Docker
---

# Docker

### By using `docker run`

```bash{2}
docker run -d \
           -p 3012:3012 \
           -p 6463-6472:6463-6472 \
           --name YTRPC-server \
           --env NODE_ENV=production \
           ghcr.io/piarre/ytrpc-server:latest
```

           --restart unless-stopped \
::: tip
You can set any port you want. See highlighted lines.
:::
