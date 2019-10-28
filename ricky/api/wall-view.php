<style>
body {
    width: 550px;
    font-family: Arial;
}

.post-item {
    border-bottom: 1px #F0F0F0 solid;
    padding: 10px;
}
.post-message {
    font-size: 1em;
    padding-bottom: 8px;
}

.post-date {
    color: #b7b7b7;
    font-size: 0.9em;
    font-style: italic;
}
</style>

<h1>Reading Facebook Feed using  PHP</h1>

<?php
if (! empty($postData)) {
    foreach ($postData as $k => $v) {
        $postDate = date("d F, Y", strtotime($postData[$k]["created_time"]))
?>
<div class="post-item">
<div class="post-message"><?php if(!empty($postData[$k]["message"])) { echo $postData[$k]["message"]; } ?></div>
<div class="post-date"><?php echo $postDate; ?></div>
</div>
<?php
    }
}
?>
