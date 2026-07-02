• 下面是 .deb 和 AppImage 的核心区别（结合 Pencil 的官方安装说明与通用 Linux 包
  装特性）：
  1. 安装与系统集成

  - .deb 会把文件安装到系统目录并注册到系统包管理中，便于用 apt/dpkg 管理、卸载
    和系统菜单集成。(docs.pencil.dev
    (https://docs.pencil.dev/getting-started/installation?utm_source=openai))
  - AppImage 是单文件可执行包，通常不“安装”到系统，只需 chmod +x 后直接运行。(d
    ocs.pencil.dev
    (https://docs.pencil.dev/getting-started/installation?utm_source=openai))
  
  2. 依赖与兼容性
  - .deb 依赖系统库，若缺依赖需要 apt 补齐。(ubuntudocs.com
    (https://www.ubuntudocs.com/deb-install/?utm_source=openai))
  - AppImage 打包了多数依赖，跨发行版兼容性更好，但通常需要 libfuse 支持。(docs
    .velopack.io

  (https://docs.velopack.io/packaging/operating-systems/linux?utm_source=openai))
    3. 更新方式
  - .deb 可随系统包管理更新（若配置仓库或下载新包）。  - AppImage 通常需要你手
    动下载新文件更新。(thisvsthat.io
    (https://thisvsthat.io/appimage-vs-snap?utm_source=openai))
    4. 便携性与清理
  - .deb 更“标准”，系统级管理、卸载更一致。  - AppImage 更便携，删掉文件即可移
    除。(docs.velopack.io

  (https://docs.velopack.io/packaging/operating-systems/linux?utm_source=openai))
    就 Pencil 而言
    Pencil 在 Linux 同时提供 .deb 和 AppImage 两种方式，官方给出了对应安装命令
    。(docs.pencil.dev
    (https://docs.pencil.dev/getting-started/installation?utm_source=openai))
    如果你追求系统级管理和菜单集成，选 .deb如果你想要更便携、跨发行版兼容，选
    AppImage