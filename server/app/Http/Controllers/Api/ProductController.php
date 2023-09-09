<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return ProductResource::collection($products);

        // return ProductResource::collection(PRoduct::query()->orderBy('id', 'desc'));
 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
        $C_name = Product::query()
            ->join('category_product', 'products.id', '=', 'category_product.product_id')
            ->join('categories', 'categories.id', '=', 'category_product.category_id')
            ->select('categories.name AS C_name')
            ->where('products.id',$product->id)
            ->get();
        // dd($C_name);
        // $nn = compact('product', 'C_name');
        return new ProductResource($product);

    }
    public function filtere(Product $slug)
    {
        $products = Product::query()
                            ->join('category_product', 'products.id', '=', 'category_product.product_id')
                            ->join('categories', 'categories.id', '=', 'category_product.category_id')
                            ->select('products.*')
                            ->orderBy('id', 'desc')
                            ->where( 'categories.name', $slug)
                            ->paginate(2);

        return ProductResource::collection($products);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
