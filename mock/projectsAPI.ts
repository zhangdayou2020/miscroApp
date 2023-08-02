const projects = [
  { id: 0, name: '维斯布鲁克', nickName: '神龟', gender: 'MALE' },
  { id: 1, name: '科比', nickName: '黑曼巴', gender: 'MALE' },
];

export default {
  'GET /api/v1/queryProjectsList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: projects },
      errorCode: 0,
    });
  },
  'PUT /api/v1/projects/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
