# The Option Standard SDK

As mentioned, the **Solana Option Standard (SOS)** is an open source software/program development kit (SDK). Inside of the SDK, there are a few things that will be built and optimized over a course of time. More detailed documentation of the list below will be provided in the near future in the [**Integrating SOS**](/getting-started/setup) section.

## Option Programs

Starting at the heart of the SDK are the **Option Programs**. These [Solana Programs](https://solana.com/docs/core/programs) are the key on-chain programs that verify option contract data for when/how an option is created, executed, assigned, exercised, etc. on-chain. It is important to note that **Option Programs are PDAs**.

>Option Programs consists of [Program Derived Addresses (PDAs)](https://solana.com/docs/core/pda) in order to safely and effectively execute option-related transactions and instructions on Solana. 

### `option_create`

>The `option_create` is the most important program in the Solana Option Standard SDK. This program specifically deals in creating compressed token accounts and applying the approrpiate option metadata for easier on-chain identification.

### `option_exercise`

>Whenever a option holder decides to exercise their option at or before the `expiration_datetime`, the `option_exercise` verifies and executes the instruction.

### `option_assign`

>If an option seller/writer get's assigned, the `option_assign` ensures the appropriate instructions are executed by the user at the time of assignment. This program works in part with the `option_execise` and the specified `expiration_datetime` for an option contract that was created. 

>>Assigning has to do with borrowing and lending pools which can get complex depending on how you decide to go about it. More on this later.

### `option_execute`

>The `option_execute` is primarily utilized in-part with frontend user interfaces. This program is the most extensive since it handles user-input instructions relating to executing option trades through an exchange or other web application.

>>In order for this to work effectively, it is recommended to utilize the `option_execute` on limit orders only.

>>>*If wanting to initialize market orders, then treat as the next best limit order price for execution when sending instructions through frontend UI.*

## Calculation Modules

To calculate the price of an option contract, certain parameters need to be created to ease development. The following are utilizable modules that are imported to construct American & European Style Options -- not limited to Custom/Exotic Options and Currency Structures. 

>These modules are used across the entirety of the **SOS SDK**, including the [Option Programs](/introduction/the-option-standard/#option-programs).
### Option Greeks

If you are unfamiliar with the greeks, check out [Options: Basics - Greeks](/options-basics/the-greeks).

##### `calc_delta`

>Calculates the change in value of an option on a $1 move in the underlying token/asset. 

##### `calc_gamma`

>Calculates the rate of change in the `calc_delta` of an option.

##### `calc_theta`

>Calculates the decay of an options value over a period of time until the `expiration_datetime`.

##### `calc_vega`

>Calculates the change in value of an option on a 1% move in `impl_vol`.

##### `calc_rho`

>Calculates the change in value of an option based on changes in `risk_free_rate`.

### Implied Volatility (IV)

#### `impl_vol`

>Implied volatility measures the expectation of price fluctuations in the future for a particular token or asset. The **Option Standard SDK** uses the [Black-Scholes Model](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model).
