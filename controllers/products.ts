

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
export const getProducts = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all products' });
};

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
export const getProduct = (req, res, next) => {
  res.status(200).json({ success: true, message: `Show product ${req.params.id}` });
};

// @desc    Create new product
// @route   POST /api/v1/products
// @access  Private
export const createProduct = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create new product' });
};

// @desc    Update product
// @route   PUT /api/v1/products/:id
// @access  Private
export const updateProduct = (req, res, next) => {
  res.status(200).json({ success: true, message: `Update product ${req.params.id}` });
};

// @desc    Delete product
// @route   DELETE /api/v1/products/:id
// @access  Private
export const deleteProduct = (req, res, next) => {
  res.status(200).json({ success: true, message: `Delete product ${req.params.id}` });
};