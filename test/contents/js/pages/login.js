
var login = {
	template : `<div class="row" style="padding-top: 30px">
					<div class="col-md-6">
						<loader :is-loading="isLoading.val" :data="user"></loader>
						<p v-show="user">Logged</p>
						<div v-show="!isLoading.val && !user" class="billing-details">
							<p>Already a customer ? <a href="#">Login</a></p>
							<div class="section-title">
								<h3 class="title">Login</h3>
							</div>
							<div class="form-group">
								<input v-model="username" class="input" type="text" name="username" placeholder="UserName">
							</div>
							<div class="form-group">
								<input v-model="password" class="input" type="password" name="password" placeholder="Password">
							</div>
							<button @click="callService" class="primary-btn">Login</button>
							<div v-show="!isLoading.val" class="form-group">
								<div class="input-checkbox">
									<input type="checkbox" id="register">
									<label class="font-weak" for="register">Create Account?</label>
									<div class="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
											<p>
												<input class="input" type="password" name="password" placeholder="Enter Your Password"></p>
											<div class="form-group">
												<input class="input" type="email" name="email" placeholder="Email">
											</div>
											<div class="form-group">
												<input class="input" type="text" name="address" placeholder="Address">
											</div>
											<div class="form-group">
												<input class="input" type="text" name="city" placeholder="City">
											</div>
											<div class="form-group">
												<input class="input" type="text" name="country" placeholder="Country">
											</div>
											<div class="form-group">
												<input class="input" type="text" name="zip-code" placeholder="ZIP Code">
											</div>
											<div class="form-group">
												<input class="input" type="tel" name="tel" placeholder="Telephone">
											</div>
											<button class="primary-btn">Create</button>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>`,
	props:['isLoading','reqData', 'user'],
	data: function(){ return {
		username : 'shervin88',
		password : 'pass',
	}},
	methods : {
		callService : function(){
		var _this = this;
		_this.user = false
		this.reqData("login", btoa(_this.username+'||'+_this.password+'/detail'), function(store){_this.$emit('userset',store)})
	},
	}
}