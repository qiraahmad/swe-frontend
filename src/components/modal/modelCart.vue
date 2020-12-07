<template>
    <div class="modal right fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
		<div class="modal-dialog" role="document">
			<div class="modal-content"><br><br>
        <div class="container">
          <cart></cart>
        </div>
			</div><!-- modal-content -->
		</div><!-- modal-dialog -->
	</div><!-- modal -->
</template>


<script>
import cart from '../miniCart.vue'
export default {
    components: {
    cart:cart
  },
}
</script>