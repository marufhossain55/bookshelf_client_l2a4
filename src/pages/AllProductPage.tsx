import Cards from '@/components/Cards';
import { useGetAllProductsQuery } from '@/redux/Features/Admin/adminManagement';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FieldValues } from 'react-hook-form';

const AllProductsPage = () => {
  // const dispatch = useAppDispatch();

  // Filter State
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    inStock: '',
    minPrice: '',
    maxPrice: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6; // Items per page

  // Handle filter changes
  const handleFilterChange = (e: FieldValues) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Construct API Query Object
  const query = useMemo(() => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      limit: limit.toString(),
    };
    if (filters.searchTerm) params.searchTerm = filters.searchTerm;
    if (filters.category) params.category = filters.category;
    if (filters.inStock)
      params.inStock = filters.inStock === 'In Stock' ? 'true' : 'false';
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;
    return params;
  }, [filters, currentPage]);

  // Fetch Data with Filters
  const { data, isLoading } = useGetAllProductsQuery(query);
  const totalPages = data?.meta?.totalPage || 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) {
    return <h2>loading</h2>;
  }

  return (
    <div className="container mx-auto mt-5 ">
      <Helmet>
        <title>BookShelf | All Products</title>
      </Helmet>

      <div className="grid lg:grid-cols-12 gap-4 mt-5 ">
        <div className="lg:mt-10 lg:h-80 p-4 bg-white shadow-lg rounded-lg lg:col-span-3 space-y-4 lg:sticky top-20">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search by title, author, or category"
            className="p-2 border w-full border-gray-300 rounded-md flex-1"
            value={filters.searchTerm}
            onChange={handleFilterChange}
          />

          <select
            name="category"
            className="p-2 border w-full border-gray-300 rounded-md"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>

          <select
            name="inStock"
            className="p-2 border border-gray-300 rounded-md w-full"
            value={filters.inStock}
            onChange={handleFilterChange}
          >
            <option value="">All Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          <div className="flex gap-2 items-center">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className="p-2 border border-gray-300 rounded-md w-24"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <span> - </span>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="p-2 border border-gray-300 rounded-md w-24"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="grid lg:col-span-9">
          <Cards sProductData={data} />
        </div>
      </div>
      <div className="flex justify-center my-8 gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-600 transition-all duration-300"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-black">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-600 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProductsPage;
