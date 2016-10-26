import {LocalStorageProivder} from '../../src/local-storage-provider';


describe('LocalStorage Get and Set with prefix', () => {
  var localStorageProivder;

  beforeEach(() => {
    localStorageProivder = new LocalStorageProivder();
    localStorageProivder.setPrefix('aurelia-localstorage');
    localStorageProivder.set('key','value')
  });

  it('get should provide the set value', () => {
    expect(localStorageProivder.get('key')).toEqual('value');
  });

  it('get should not be able to fetch set value if prefix is changed', () => {
    localStorageProivder.setPrefix('aurelia-localstorage2')
    expect(localStorageProivder.get('key')).toEqual(null);
  });


  it('get should be able to fetch set value if prefix is changed back', () => {
    localStorageProivder.setPrefix('aurelia-localstorage2')
    localStorageProivder.set('key','value2')
    localStorageProivder.setPrefix('aurelia-localstorage')
    expect(localStorageProivder.get('key')).toEqual('value');
  });

});
