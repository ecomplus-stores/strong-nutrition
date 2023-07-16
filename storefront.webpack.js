const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/js/ShippingCalculator.js')
    }
  }
})
