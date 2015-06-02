Vue.component('ved-form-endereco', {
    template: require('./template.html'),
    data: function()
    {
        return {
            cep:'',
            endereco: {},
            naoLocalizado: false
        }
    },
    attached: function()
    {
        if(jQuery().mask)
        {
            jQuery(this.$$.cep).mask('00000-000');
        }
    },
    methods: {
        buscar: function()
        {
            var self = this;

            self.endereco = {};
            naoLocalizado = false;

            if(/^[0-9]{5}-[0-9]{3}$/.test(this.cep))
            {
                self.$http.get('http://viacep.com.br/ws/'+this.cep+'/json/', function(endereco)
                {
                    if(endereco.erro)
                    {
                        self.$$.logradouro.focus();
                        self.naoLocalizado = true;
                        return;
                    }
                    self.endereco = endereco;
                    self.$$.numero.focus();
                });
            }
        }
    }
});