﻿

const template: Template = {
	properties: {
		'TRoot.$$Tab': String,
		'TItemRole.$Id'() { return this.Id || '@[NewItem]' },
		'TRoleAccount.$PlanArg'() { return {Plan: this.Plan.Id}; }
	},
	defaults: {
	},
	validators: {
		'ItemRole.Name': '@[Error.Required]',
		'ItemRole.Accounts[].Plan': '@[Error.Required]',
		'ItemRole.Accounts[].AccKind': '@[Error.Required]',
		'ItemRole.Accounts[].Account': '@[Error.Required]'
	}
};

export default template;
