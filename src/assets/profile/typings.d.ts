export interface Profile {
  name: string;
  avatar: string;
  /**
   * 应征职位
   */
  offers: string[];
  /**
   * 基础信息
   */
  overview: Overview[];
  /**
   * 工作经验
   */
  workExperience: WorkExperience[];
  /**
   * 个人项目
   */
  personalProjects: PersonalProject[];
  /**
   *
   */
  skills: Skill[];
}

interface Overview {
  label: string;
  value: string;
  action?: Omit<RichAction, "label">;
}

export interface WorkExperience {
  /**
   * 公司名
   */
  company: string;
  /**
   * 开始时间
   */
  startTime: string;
  /**
   * 结束时间
   */
  endTime: string;
  /**
   * 工作描述
   */
  description?: string;
  /**
   * 从事项目
   */
  projects: WorkExperienceProject[];
}

interface WorkExperienceProject extends RichContentRender {
  /**
   * 项目名
   */
  name: string;
  /**
   * 角色
   */
  role?: string;
  /**
   * 图标
   *
   * @link https://fonts.google.com/icons
   */
  icon: string;
  /**
   * 项目工作时长
   */
  duration?: string;
}

interface PersonalProject extends RichContentRender {
  /**
   * 项目名
   */
  name: string;
  /**
   * 外部链接
   */
  origin?: string;
}

interface Skill extends RichContentRender {
  /**
   * 技能名称
   */
  name: string;
  /**
   * 注释文字
   */
  comment?: string;
  /**
   * 技能图标
   */
  icons?: string[];
}

export interface RichContentRender {
  /**
   * 内容类型
   * @default text
   */
  contentType?: "text" | "html" | "markdown" | "vnode";
  /**
   * 内容
   * 支持纯文字、HTML标签(prevent-xss)、Markdown、VNode
   *
   * Markdown Engine: https://www.npmjs.com/package/markdown-it
   */
  content: string | (() => VNode);
}

export interface RichAction {
  /**
   * 动作类型
   */
  type: "url" | "image-preview";
  /**
   * 用以触发动作的行为文字
   */
  label: string;
  /**
   * 动作参数
   * image-preview 场景下传入数组可实现多图预览
   */
  data: string | string[];
}
