<template>
   <!---->
              <div class="modal fade"  :id="`${img}`">
                  <div class="modal-dialog modal-m">
                    <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <!-- Modal footer -->
                        <!-- Modal body -->
                        <div class="modal-body">
                            <div class="row">
                              <img :src="require(`../../../public/img/${gender}/${catg}/${img}.jpg`)" alt="" width="100%" height="650px">
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              <!---->
</template>


<script>

export default {
    components: {
  },
  props:['gender','catg','img']
}
</script>