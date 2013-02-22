  	$().ready(function() {
		$.validator.addMethod('allowedChar',
           validateUniCodeChars, 'Enter a string.'
         );
         $.validator.addMethod('validateDate',
           validateDate, 'Enter the date in the format of yyyy-mm-dd.'
         );
         
         $('#video_production_start_date').datepicker({
				format: 'yyyy-mm-dd'
			});
         $('#video_production_end_date').datepicker({
				format: 'yyyy-mm-dd'
			});
         $('#approval_date').datepicker({
				format: 'yyyy-mm-dd'
			});
         
         $('#person_list_table').dataTable();
         $('#video_list_table').dataTable();
         $('#mediator_list_table').dataTable();
         $('#group_list_table').dataTable();
         $('#screening_list_table').dataTable();
         $('#adoption_list_table').dataTable();
         
         //for type ahead fields
         $("[data-provide='typeahead']").blur(function(e) {
        	    if ($('.dropdown-menu').is(":visible")) {
        	      $(this).data('typeahead').click(e);
        	   }
        	  });
         
         //for group page inline validation
         
		$("#video_form").validate({
				rules: {
					title: {
						required: true,
						minlength: 2,
						maxlength: 200,
						allowedChar:true
					},
					video_type: "required",
					video_production_start_date: {
						required: true,
						validateDate: true
					},
					video_production_end_date: {
						required: true,
						validateDate: true
					},
					language: "required",
					summary:{
						minlength: 2,
						maxlength: 500,
						allowedChar:true
					},
					village:"required",
					facilitator:"required",
					camera_operator:"required",
					persons_shown: "required",
					actors:"required",
					video_suitable_for: "required",
					aprroval_date:{
						validateDate: true
					},
					youtubeid:{
						maxlength: 20
					}
				},
				messages: {
					title: {
						required: 'Enter Video Title',
						minlength: 'Video title should be atleast 2 characters',
						maxlength: 'Video title should be atmax 200 characters',
						allowedChar: 'Video title should only contain alphabets and local language characters'
					},
					video_type: "Enter Video Type",
					video_production_start_date: {
						required: 'Enter Video Production Start Date',
						validateDate: "Enter Video Production Start Date in the form of yyyy-mm-dd"
					},
					video_production_end_date: {
						required: 'Enter Video Production End Date',
						validateDate: "Enter Video Production End Date in the form of yyyy-mm-dd"
					},
					language: "Enter Language",
					summary:{
						minlength: "summary should be atleast 2 characters",
						maxlength: "summary should be atmax 500 characters",
						allowedChar: "summary should not contain special characters"
					},
					village:"Enter Village",
					facilitator:"Enter Facilitator",
					camera_operator:"Enter Camera Operator",
					persons_shown: "Enter Persons Shown",
					actors:"Enter Actors",
					video_suitable_for: "Enter Video Suitable For",
					aprroval_date:{
						validateDate: "Enter Approval Date in the form of yyyy-mm-dd"
					},
					youtubeid:{
						maxlength: "youtubeid should be not more than 20 characters"
					}
				},
				
				highlight: function(element, errorClass, validClass) {
                    $(element)
                        .parent('div')
                        .parent('div')
                        .addClass("error");

                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element)
                        .parent('div')
                        .parent('div')
                        .removeClass("error");

                },
                errorElement: "span",
                errorClass: "help-inline"

				
			});
		
		$("#mediator_form").validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
					maxlength: 100,
					allowedChar:true
				},
				gender: "required",
				phone_number: {
					digits: true,
					maxlength: 10
				}
			},
			messages: {
				name: {
					required: 'Enter Mediator Name',
					minlength: 'Mediator Name  should be atleast 2 characters',
					maxlength: 'Mediator Name should be atmax 100 characters',
					allowedChar: 'Mediator name should only contain alphabets and local language characters'
				},
				gender: "Enter Gender",
				phone_number: {
					digits: 'phone number should contain only digits',
					maxlength: "phone number should not contain more than 10 digits"
				}
			}
		});
		
		$("#group_form").validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
					maxlength: 100,
					allowedChar:true
				},
				village: "required",
				person_name_1: {
					required: true,
					minlength: 2,
					maxlength: 100,
					allowedChar:true
				},
				father_name_1: {
					required: true,
					minlength: 2,
					maxlength: 100,
					allowedChar:true
				},
				age_1: {
					digits: true,
					min:1,
					max:100
				},
				gender_1: "required",
				phone_number_1: {
					digits: true,
					maxlength: 10
				}
			},
			messages: {
				name: {
					required: 'Enter group Name',
					minlength: 'Group Name  should be atleast 2 characters',
					maxlength: 'Group Name should be atmax 100 characters',
					allowedChar: 'Group name should only contain alphabets and local language characters'
				},
				village: "Enter village",
				person_name_1: {
					required: 'Person Name is required',
					minlength: "Person Name  should be atleast 2 characters",
					maxlength: 'Person Name should be atmax 100 characters',
					allowedChar: 'Person name should only contain alphabets and local language characters'
				},
				father_name_1: {
					required: 'Father Name is required',
					minlength: "Father Name  should be atleast 2 characters",
					maxlength: 'Father Name should be atmax 100 characters',
					allowedChar: 'Father name should only contain alphabets and local language characters'
				},
				age_1: {
					digits: "Age should contain digits only",
					min:"Age should not be less than 1 year",
					max:"Age should not be more than 100 years"
				},
				phone_number_1: {
					digits: 'phone number should contain only digits',
					maxlength: "phone number should not contain more than 10 digits"
				}
			}
		});
		
		$("#group_form table tr :input").each(function () {
        	$(this).change(function () {
        		$("#"+$(this).closest('tr').attr('id') +" :input").each(
        			function () {
        				var adata = $(this).attr('id').split('_');
        				console.log(adata);
        				if( (adata[0] == "person") || (adata[0] == "father")) {
        					console.log(this);
        					$("#"+$(this).attr('name')).rules("add",{required: true});
            				$("#"+$(this).attr('name')).rules("add",{minlength: 2});
            				$("#"+$(this).attr('name')).rules("add",{maxlength: 100});
            				$("#"+$(this).attr('name')).rules("add",{allowedChar: true});
            				console.log($(this).rules());
        				} else if (adata[0] == "age") {
        					$("#"+$(this).attr('name')).rules("add",{digits: true});
        					$("#"+$(this).attr('name')).rules("add",{required: true});
            				$("#"+$(this).attr('name')).rules("add",{min: 1});
            				$("#"+$(this).attr('name')).rules("add",{max: 100});
        				} else if (adata[0] == "gender") {
        					$("#"+$(this).attr('name')).rules("add",{required: true});
        				} else if (adata[0] == "phonenumber") {
            				$("#"+$(this).attr('name')).rules("add",{maxlength: 10});
            				$("#"+$(this).attr('name')).rules("add",{digits: true});
        				}
        			});
        	});
        });
		
		//end of group form validation
		
		
	});
