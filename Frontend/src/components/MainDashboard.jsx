import React from 'react'
import { Search, Plus, Printer, ToggleLeft } from 'lucide-react'

const MainDashboard = () => {
  return (
    <main className="main-dash">
      <div className="dash-header">
        <div className="search-bars">
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder="Search Article No..." />
          </div>
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder="Search Product..." />
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary"><Plus size={18} /> New Product</button>
          <button className="btn-secondary"><Printer size={18} /> Print List</button>
          <button className="btn-toggle"><ToggleLeft size={18} /> Advanced mode</button>
        </div>
      </div>

      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Article No.</th>
              <th>Product/Service</th>
              <th>In Price</th>
              <th>Price</th>
              <th>Unit</th>
              <th>In Stock</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div>1234567890</div></td>
              <td><div>This is a test product with fifty characters this!</div></td>
              <td><div>900500</div></td>
              <td><div>1500800</div></td>
              <td><div>kilometers/hour</div></td>
              <td><div>2500600</div></td>
              <td><div>This is the description with fifty characters this! ...</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default MainDashboard