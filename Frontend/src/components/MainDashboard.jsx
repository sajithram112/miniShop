import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Plus, Printer, ToggleLeft } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { get_products } from '../../service/userService';

const MainDashboard = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  const fetchProducts = async (pageNum = 1, reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await get_products({ page: pageNum, limit });
      if (response?.data && response.data.length > 0) {
        setProducts(prev => reset ? response.data : [...prev, ...response.data]);
        setHasMore(response.data.length === limit);
        console.log(response.data.length === limit, 'there')
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log('Failed to load products:', err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1, true);
  }, []);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchProducts(page + 1);
      setPage(prev => prev + 1);
    }
  };

  return (
    <main className="main-dash">
      <div className="dash-header">
        <div className="search-bars">
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder={t('search_article_no')} />
          </div>
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder={t('search_product')} />
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary">
            <Plus size={18} /> {t('button_new_product')}
          </button>
          <button className="btn-secondary">
            <Printer size={18} /> {t('button_print_list')}
          </button>
          <button className="btn-toggle">
            <ToggleLeft size={18} /> {t('button_advanced_mode')}
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>{t('table_header_article_no')}</th>
              <th>{t('table_header_product_service')}</th>
              <th>{t('table_header_in_price')}</th>
              <th>{t('table_header_price')}</th>
              <th>{t('table_header_unit')}</th>
              <th>{t('table_header_in_stock')}</th>
              <th>{t('table_header_description')}</th>
            </tr>
          </thead>
          <tbody id="scrollable-tbody">
            <InfiniteScroll
              dataLength={products.length}
              next={loadMore}
              hasMore={hasMore}
              loader={
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                    {t('loading_more') || 'Loading more...'}
                  </td>
                </tr>

              }
              endMessage={
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                    {t('no_more_products') || '-- No more products --'}
                  </td>
                </tr>
              }
              scrollableTarget="scrollable-tbody"
            >
              {products.map((product) => (
                <tr key={product.id || product.article_no}>
                  <td>{product.article_no}</td>
                  <td>{product.title}</td>
                  <td>{product.in_price}</td>
                  <td>{product.price}</td>
                  <td>{product.unit}</td>
                  <td>{product.in_stock}</td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </InfiniteScroll>
          </tbody>
        </table>
        {products.length === 0 && !loading && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
            {t('no_products_found') || 'No products found'}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainDashboard;