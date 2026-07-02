● 这是 shell 脚本中的 heredoc（here-document） 语法。

  语法解释

  cat <<'EOF'
  ...
  EOF

  各部分含义

  ┌────────────┬──────────────────────────┐
  │    部分                  │           说明                                            │
  ├────────────┼──────────────────────────┤
  │ cat                       │ 命令，输出内容                                      │
  ├────────────┼──────────────────────────┤
  │ <<                       │ heredoc 开始标记                                 │
  ├────────────┼──────────────────────────┤
  │ 'EOF'                   │ 定界符（用单引号包围）                        │
  ├────────────┼──────────────────────────┤
  │ 中间的内容           │ 要传递给命令的文本                              │
  ├────────────┼──────────────────────────┤
  │ 结尾的 EOF           │ 结束标记（必须单独一行）                    │
  └────────────┴──────────────────────────┘

  单引号的作用

  # 单引号包围 - 不进行变量和命令替换
  cat <<'EOF'
  $HOME
  $(date)
  EOF
  # 输出: $HOME
  #       $(date)

  # 无引号 - 会进行变量和命令替换
  cat <<EOF
  $HOME
  $(date)
  EOF
  # 输出: /home/cyd
  #       Fri Mar 14 10:00:00 CST 2026

  常见用法

  # 1. 写入文件
  cat <<'EOF' > config.txt
  name = "test"
  version = "1.0"
  EOF

  # 2. 多行 SQL 查询
  mysql <<'SQL'
  SELECT * FROM users
  WHERE status = 'active';
  SQL

  # 3. 创建脚本文件
  cat <<'SCRIPT' > run.sh
  #!/bin/bash
  echo "Hello World"
  SCRIPT
  chmod +x run.sh

  定界符命名

  EOF 只是习惯用法，可以用任意字符串：
  cat <<'END_TAG'
  some content
  END_TAG

  cat <<'STOP'
  more content
  STOP