import chai from 'chai';
import Vuex from "vuex";
import { expect } from 'chai';
// import { render } from '@vue/server-test-utils'
import Home1 from '../../src/App.vue'
import menPants from '../../src/components/Mens/categories/menPants.vue'
import {shallowMount,createLocalVue,  shallow } from "@vue/test-utils";
import sinon from 'sinon'
// import router from '../../src/router/index'
import sinonChai from 'sinon-chai'
import spies from 'chai-spies';
import Vue from 'vue'

import VueRouter from 'vue-router'
const localVue = createLocalVue()

Vue.use(Vuex)
chai.use(spies);
chai.use(sinonChai);

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()
const assert=chai.assert
// describe('Home1', () => {
//   beforeEach(() => {
//     component = shallowMount(Home1);
//   });
  
//   it("should render Home1 on mount", () => {
//     expect(component.find('#one').exists()).to.equal(true);
//   });
// })

//Also, wrapper.vm.setLoading calls the setLoading method.
describe('Basic component', () => {

  describe('Lifecycle', () => {
    it('Mounted', () => {
      const mountedFin=sinon.stub(Home1.methods,'mountedFin') //Wrapper After The Stub!!!!
      const wrapper = shallowMount(Home1);
      expect(mountedFin).to.be.calledWith('Mounted')
      
    })

    it('Destroyed',() => {
     const destroyedFin=sinon.stub(Home1.methods,'destroyedFin') //Wrapper After The Stub!!!!
     const wrapper = shallowMount(Home1);
     wrapper.destroy()
     expect(destroyedFin).to.be.calledWith() //We expect that the function will be called after wrapper destroy 
    })
    
  })
})

describe(" Store Auth Testing", () => {
  let actions
  let store
  // let wrapper = shallow(menPants, { store, localVue}) //, router
      beforeEach(() => {
        // wrapper = mount(menPants, { store, localVue, router })
        actions = {
          SOME_ACTION: sinon.stub()
        }
        store = new Vuex.Store({
          actions
        })
      })
      // beforeEach(() => {
      // const storeAuth = {
      // state: {}, 
      //   actions:{
      //     register: sinon.stub(),
      //     storeUser: sinon.stub()
      //   }
      // }
      
      //   store = new Vuex.Store({
      //     modules: {
      //       storeAuth: storeAuth
      //     }
      //   })
      //  })
     
      it("Test Cart", () => {
      // let wrapper=mount(menPants , { store, localVue , router})
      var buyItem=sinon.stub(menPants.methods,'buyItem') 
       shallow(menPants, { store, localVue})
      // expect(buyItem).to.be.calledWith(1)
      // wrapper.find({ ref: 'addcart' })
      // var button = wrapper.find({ ref: 'addcart' })
      // button.trigger('click')
      // buyItem.trigger('click')
      
      // var addCart = { method: function (some) {
      //   if(some===Number){
      //     this.$store.dispatch('buyItem', order);
      //   }
       
      // } };
      // var order={
      //   name:'1',
      //   size:'3',
      // }
      // const vm=wrapper
      // function addCart(){
      //   vm.$store.dispatch('buyItem',order)
      // }

      // addCart()

      
      // var mock = sinon.mock(addCart);
      // mock.calledWith(1)
      // mock.expects("method").once().throws(); // working! 
      expect(actions.SOME_ACTION).to.have.been.called.once
      });
})
