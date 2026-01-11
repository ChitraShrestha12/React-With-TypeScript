function OrderForm() {
  return (
    <form className="order-form">
      <h2 className="form-heading">Place Your Order</h2>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        placeholder="Enter price"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
