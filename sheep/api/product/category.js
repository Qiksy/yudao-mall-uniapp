import request from '@/sheep/request';

const CategoryApi = {
  // 查询分类列表
  getCategoryList: () => {
    return request({
      url: '/app-api/product/category/list',
      method: 'GET',
    });
  },
  // 查询分类列表，指定编号
  getCategoryListByIds: (ids) => {
    return request({
      url: '/app-api/product/category/list-by-ids',
      method: 'GET',
      params: { ids },
    });
  },
};

export default CategoryApi;
