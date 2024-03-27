-- init.lua
box.cfg {
    listen = 3301
}

box.once("init_customers_space", function()
    -- Create the 'customers' space (table)
    local customers = box.schema.space.create('customers', {
        format = {
            {'id', 'unsigned'},
            {'name', 'string'},
            {'phone_number', 'string'},
            {'attributes', 'map'}
        },
        if_not_exists = true,
    })

    -- Create a primary index based on 'id'
    customers:create_index('primary', {
        parts = {'id'},
        if_not_exists = true,
    })
end)
