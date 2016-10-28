import {LocalStorageProvider} from '../../src/aurelia-local-storage';


describe('LocalStorage Get and Set with prefix', () => {
  var localStorageProvider;

  beforeEach(() => {
    localStorageProvider = new LocalStorageProvider();
    localStorageProvider.setPrefix('aurelia-localstorage');
    localStorageProvider.set('key','value')
  });

  it('get should provide the set value', () => {
    expect(localStorageProvider.get('key')).toEqual('value');
  });

  it('get should not be able to fetch set value if prefix is changed', () => {
    localStorageProvider.setPrefix('aurelia-localstorage2')
    expect(localStorageProvider.get('key')).toEqual(null);
  });


  it('get should be able to fetch set value if prefix is changed back', () => {
    localStorageProvider.setPrefix('aurelia-localstorage2')
    localStorageProvider.set('key','value2')
    localStorageProvider.setPrefix('aurelia-localstorage')
    expect(localStorageProvider.get('key')).toEqual('value');
  });

});
