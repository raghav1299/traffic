import { observable } from 'mobx'

class Store {
  @observable details = []
  @observable filtertype = ''
  @observable filterinfo = ''
}

export default new Store;