<template>
    <div class="col-md-8 text-center d-flex justify-content-between ms-4">
        <span><b>Ürün Ekle:</b></span>
        <input  type="text" placeholder="Ne alacaksın?" @keydown.enter="$emit('onSave',$event)" />
      </div>
</template>