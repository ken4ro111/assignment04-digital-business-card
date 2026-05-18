export class User {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly githubId: string | null;
  readonly qiitaId: string | null;
  readonly xId: string | null;
  readonly createdAt: string;
  readonly githubUrl: string | null;
  readonly qiitaUrl: string | null;
  readonly xUrl: string | null;

  private constructor(params: {
    id: number;
    name: string;
    description: string;
    githubId: string | null;
    qiitaId: string | null;
    xId: string | null;
    createdAt: string;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.githubId = params.githubId;
    this.qiitaId = params.qiitaId;
    this.xId = params.xId;
    this.createdAt = params.createdAt;
    this.githubUrl = params.githubId ? `https://github.com/${params.githubId}` : null;
    this.qiitaUrl = params.qiitaId ? `https://qiita.com/${params.qiitaId}` : null;
    this.xUrl = params.xId ? `https://x.com/${params.xId}` : null;
  }

  static create(params: {
    id: number;
    name: string;
    description: string;
    githubId: string | null;
    qiitaId: string | null;
    xId: string | null;
    createdAt: string;
  }): User {
    return new User(params);
  }
}
