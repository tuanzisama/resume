import { Profile } from "./typings";

export const profile: Profile = {
  name: "tuanzi",
  avatar: "",
  offers: ["全沾开发工程师"],
  overview: [
    {
      label: "性别",
      value: "男",
    },
    {
      label: "电话",
      value: "138xxxxxxxx",
      action: {
        type: "url",
        data: "tel:138xxxxxxxx",
      },
    },
    {
      label: "邮箱",
      value: "mail@example.com",
      action: {
        type: "url",
        data: "mailto:mail@example.com",
      },
    },
    {
      label: "微信",
      value: "any-wechat",
    },
    {
      label: "年龄",
      value: `${new Date().getFullYear() - 1949} 岁`,
    },
    {
      label: "Github",
      value: "@tuanzisama",
      action: {
        type: "url",
        data: "https://github.com/tuanzisama",
      },
    },
    {
      label: "工作年限",
      value: `${new Date().getFullYear() - 2000} 年`,
    },
    {
      label: "NPM",
      value: "~evenwan",
      action: {
        type: "url",
        data: "https://www.npmjs.com/~evenwan",
      },
    },
  ],
  workExperience: [
    {
      company: "智联科技有限公司",
      startTime: "2018/01",
      endTime: "2019/02",
      projects: [
        {
          name: "企业协作平台",
          role: "前端开发工程师",
          icon: "work_outline",
          contentType: "markdown",
          content:
            "开发并维护了一个企业内部协作平台，基于 React 和 Redux，支持团队之间的即时沟通、任务管理和文件共享。通过代码分割和懒加载技术，显著降低了应用的初始加载时间。",
        },
        {
          name: "客户管理系统",
          role: "前端开发工程师",
          icon: "people_outline",
          contentType: "markdown",
          content:
            "参与开发了一个客户关系管理（CRM）系统，基于 Angular 和 NgRx 实现，提供了客户信息的管理、销售跟踪和数据分析功能。通过优化表单处理和数据请求，提升了系统的性能和用户体验。",
        },
      ],
    },
    {
      company: "创新科技有限公司",
      startTime: "2020/05",
      endTime: "2021/07",
      projects: [
        {
          name: "智能家居控制系统",
          role: "前端开发工程师",
          icon: "home",
          duration: "3月",
          contentType: "markdown",
          content:
            "开发了一个基于 Vue.js 和 Element UI 的智能家居控制面板，用户可以通过该面板控制家中的各种智能设备。通过优化组件结构，提升了系统的响应速度和稳定性。",
        },
      ],
    },
    {
      company: "未来科技有限公司",
      startTime: "2019/03",
      endTime: "2020/04",
      projects: [
        {
          name: "AI聊天机器人",
          role: "后端开发工程师",
          icon: "chat",
          contentType: "markdown",
          content:
            "参与开发了一个基于 Python 和自然语言处理技术的 AI 聊天机器人，支持多种语言的实时对话。通过优化算法和数据库结构，提升了机器人的响应速度和准确性。",
        },
      ],
    },
  ],
  personalProjects: [
    {
      name: "weather-dashboard",
      contentType: "html",
      origin: "https://github.com/example/weather-dashboard",
      content:
        "<p>一个基于 React 的天气仪表盘应用，支持全球多个城市的实时天气数据查询和可视化。</p>",
    },
    {
      name: "task-manager",
      contentType: "markdown",
      origin: "https://github.com/example/task-manager",
      content:
        "一个用 Node.js 开发的任务管理工具，支持任务创建、编辑、删除和完成状态更新。",
    },
    {
      name: "photo-gallery",
      contentType: "html",
      origin: "https://github.com/example/photo-gallery",
      content:
        "<p>一个用 Angular 开发的照片库应用，支持照片上传、分类和浏览。</p>",
    },
  ],
  skills: [
    {
      name: "前端",
      comment: "Front-End Develop",
      icons: ["html", "css", "javascript"],
      contentType: "markdown",
      content:
        "- 编写语义化的 HTML，模块化的 CSS，完成复杂的布局\n- 熟悉 Less/SCSS 等 CSS 预处理器、编写 CSS 过渡、动画效果\n- 熟悉 Pug(Jade) HTML 模板引擎\n- 对前端的多设备、新/旧式浏览器的兼容有一定经验",
    },
    {
      name: "后端",
      comment: "Back-End Develop",
      icons: ["nodejs", "express", "mongodb"],
      contentType: "markdown",
      content:
        "- 使用 Node.js 和 Express 构建高性能的 RESTful API\n- 熟悉 MongoDB 数据库的设计和优化\n- 能够处理大规模数据和高并发请求\n- 熟悉使用 JWT 进行用户身份验证",
    },
    {
      name: "全栈",
      comment: "Full-Stack Develop",
      icons: ["vue", "nodejs", "mysql"],
      contentType: "markdown",
      content:
        "- 使用 Vue.js 构建高效的用户界面\n- 在后端使用 Node.js 和 MySQL 进行数据管理\n- 具备前后端集成开发能力，能独立完成项目全栈开发\n- 熟悉 Webpack、Babel 等构建工具",
    },
    {
      name: "数据分析",
      comment: "Data Analysis",
      icons: ["python", "pandas", "sql"],
      contentType: "markdown",
      content:
        "- 使用 Python 和 Pandas 进行数据清洗和处理\n- 编写 SQL 查询以从数据库中提取和分析数据\n- 进行数据可视化，生成报告和图表\n- 熟悉机器学习基础，能够应用简单的预测模型",
    },
    {
      name: "UI/UX 设计",
      comment: "UI/UX Design",
      icons: ["figma", "sketch", "adobe"],
      fit: "full",
      contentType: "markdown",
      content:
        "- 使用 Figma 和 Sketch 进行界面设计和原型制作\n- 了解用户体验设计原则，能够进行用户研究和测试\n- 熟悉 Adobe Creative Suite，包括 Photoshop 和 Illustrator\n- 设计响应式布局，确保在各种设备上的用户体验",
    },
    {
      name: "系统运维",
      comment: "System Operations",
      icons: ["linux", "docker", "nginx"],
      contentType: "markdown",
      content:
        "- 熟悉 Linux 系统管理和脚本编写\n- 使用 Docker 进行容器化部署和管理\n- 配置和维护 Nginx 作为反向代理和负载均衡器\n- 监控系统性能，排查和解决运行时问题",
    },
  ],
};
