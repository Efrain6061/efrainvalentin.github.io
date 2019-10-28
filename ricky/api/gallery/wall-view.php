<?php
if (! empty($postData)) {
    foreach ($postData as $k => $v) {
?>
<div class="col-lg-3 col-md-4 col-6">
    <a class="d-block mb-4 galeria-a" data-toggle="modal" data-src="<?php echo $postData[$k]["source"]; ?>" data-target="#galeriaModal">
        <img class="thumb py-2" src="<?php echo $postData[$k]["source"]; ?>" alt="">
    </a>
</div>
<?php
    }
}
?>
