import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Plus, Printer, ToggleLeft } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { create_product, edit_product, get_products } from '../../service/userService';
import { toaster } from '../helper/commonHelper';
import CreateProductPopup from '../popups/createProductPopup';
import InputText from '../helperComponents/inputText';

const MainDashboard = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [createPopup, setCreatePopup] = useState(false)
  const [apiloader, setApiLoader] = useState(false)
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
const saveChanges = async (id, field, value) => {
  console.log(id, field, value)
  const params = { id, field, value }
  const element = products.find(x => x.id == id)
  if (element[field] !== value) {
    const edit_result = await edit_product(params)
    if (edit_result.status) {
      const updatedProducts = products.map(p => 
        p.id === id ? { ...p, [field]: value } : p
      )
      setProducts(updatedProducts)
      toaster('Updated successfully', 'success')
    } else {
      toaster('Unable to edit, try again later', 'error')
    }
  } else {
    console.log('no changes')
  }
}

const saveNewProduct = async (newProduct) => {
  setApiLoader(true)
  try {
    const res = await create_product(newProduct)
    if (res.status) {
      toaster('Product created successfully', 'success')
      setProducts([res.data, ...products])
      toggleCreateModal()
    } else {
      toaster('Failed to create product', 'error')
    }
  } catch (e) {
    console.log(e)
    toaster('Server error', 'error')
  }
  setApiLoader(false)
}

const toggleCreateModal = (bool) => {
  setCreatePopup(bool)
}

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
          <button className="btn-primary new-product" onClick={() => toggleCreateModal(true)}>
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
                    {t('loading') || 'Loading'} ...
                  </td>
                </tr>

              }
              endMessage={
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                    -- {t('no_more_data') || 'No more products'} --
                  </td>
                </tr>
              }
              scrollableTarget="scrollable-tbody"
            >
             {products.map((product) => (
              <tr key={product.id}>
                <td><div className='rounded-data-holder'>{product.article_no}</div></td>
                <td>
                  <InputText
                    value={product.title}
                    type='text'
                    saveChanges={(newValue) => saveChanges(product.id, 'title', newValue)}
                  />
                </td>
                <td>
                  <InputText
                    value={product.in_price}
                    type='number'
                    saveChanges={(newValue) => saveChanges(product.id, 'in_price', newValue)}
                  />
                </td>
                <td>
                  <InputText
                    value={product.price}
                    type='numeber'
                    saveChanges={(newValue) => saveChanges(product.id, 'price', newValue)}
                  />
                </td>
                <td>
                  <InputText
                    value={product.unit}
                    type='text'
                    saveChanges={(newValue) => saveChanges(product.id, 'unit', newValue)}
                  />
                </td>
                <td>
                  <InputText
                    value={product.in_stock}
                    type='number'
                    saveChanges={(newValue) => saveChanges(product.id, 'in_stock', newValue)}
                  />
                </td>
                <td>
                  <InputText
                    value={product.description}
                    type='text'
                    saveChanges={(newValue) => saveChanges(product.id, 'description', newValue)}
                  />
                </td>
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
      {createPopup && <CreateProductPopup
        saveNewProduct={saveNewProduct}
        createPopup={createPopup}
        close={() => toggleCreateModal(false)}
        apiloader={apiloader}
      />
      }
    </main>
  );
};

export default MainDashboard;