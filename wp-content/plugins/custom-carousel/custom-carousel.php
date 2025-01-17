<?php
/**
 * Plugin Name: Custom Carousel
 * Description: Um plugin simples para adicionar um carrosel de imagens.
 * Version: 1.0
 * Author: ViniciusSilva97
 */

 if ( ! defined('ABSPATH') ) {
    exit;
}

function custom_carousel_shortcode() {
    ob_start();
    ?>
    <div class="custom-carousel">
        <div class="carousel-slide">
            <img src="https://via.placeholder.com/800x400?text=Imagem+1" alt="Imagem 1">
        </div>
        <div class="carousel-slide">
            <img src="https://via.placeholder.com/800x400?text=Imagem+2" alt="Imagem 2">
        </div>
        <div class="carousel-slide">
            <img src="https://via.placeholder.com/800x400?text=Imagem+3" alt="Imagem 3">
        </div>
    </div>
    <?php
    return ob_get_clean();
}

function custom_carousel_enqueue_styles() {
    wp_enqueue_style('custom-carousel-style', plugin_dir_url(__FILE__) . 'style.css');
}

function custom_carousel_enqueue_scripts() {
    wp_enqueue_script( 'custom-carousel-script', plugin_dir_url( __FILE__ ) . 'script.js', array(), false, true );
}


add_action('wp_enqueue_script', 'custom_carousel_enqueue_styles')
add_shortcode('custom_carousel', 'custom_carousel_shortcode');
add_action( 'wp_enqueue_scripts', 'custom_carousel_enqueue_scripts' );
