import express from 'express';

const PORT = 8080;
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send(`
    <h1>練習問題</h1>
    <p>下記のフォームで送信したリクエストを「商品1、商品2がカートに追加されました。」のようなレスポンスとして返却する処理を記述しましょう</p>
    <form action="/cart" method="POST">
    <div>
      <label>商品：<input type="text" name="product[]"></label>
    </div>
    <div>
      <label>商品：<input type="text" name="product[]"></label>
    </div>
    <input type="submit">
    </form>
    `);
});

app.post("/cart", function(req, res) {
  const params = req.body;
  console.log(params);
  res.send(`${params.product[0]}、${params.product[1]}がカートに追加されました。`)
});

app.listen(PORT, function() {
  console.log(`Server start: http://localhost:${PORT}`);
});

