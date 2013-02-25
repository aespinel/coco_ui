  	$().ready(function() {
		$.validator.addMethod('allowedChar',
           validateUniCodeChars, 'Enter a string.'
         );
         $.validator.addMethod('validateDate',
           validateDate, 'Enter the date in the format of yyyy-mm-dd.'
         );
         $.validator.addMethod('validateTime',
             validateTime, 'Enter the time in the format of hh:mm in 24 hours format'
           );
         //Date fields init
         $('#video_production_start_date').datepicker({
				format: 'yyyy-mm-dd'
			});
         $('#video_production_end_date').datepicker({
				format: 'yyyy-mm-dd'
			});
         $('#approval_date').datepicker({
				format: 'yyyy-mm-dd'
			});
         $('#date_screening').datepicker({
				format: 'yyyy-mm-dd'
			});
         $("#date_screening").focusout(function () {
        	 $('#date_screening').datepicker('hide');
        	});
         //time fields init
         $('#start_time_picker').timepicker({
             minuteStep: 1,
             defaultTime: false,
             showMeridian: false
         });
         $('#end_time_picker').timepicker({
        	 minuteStep: 1,
        	 defaultTime: false,
             showMeridian: false
         });
         //data table init
         $('#person_list_table').dataTable();
         $('#video_list_table').dataTable();
         $('#mediator_list_table').dataTable();
         $('#group_list_table').dataTable();
         $('#screening_list_table').dataTable();
         $('#adoption_list_table').dataTable();
         
         animator_select_json= {"villages": [{"name": "Bhallapur", "id": 10000000000337}, 
                                             {"name": "Dhanurjayapuram", "id": 10000000000339}], 
                                             "groups": [{"name": "CHASI DALA", "id": 10000000000783}, 
                                                        {"name": "DANGAR KRUSAKA SANGA", "id": 10000000000674}, {"name": "KRUSHAKA SANGHA", "id": 10000000000843}], "persons": [{"name": "CHASI AMMA", "id": 10000000000783}, 
                                                                                                                                                                               {"name": "Ajju Bai", "id": 10000000000674}, {"name": "KRUSHAKA RAM", "id": 10000000000843}]}
         //alert(animator_select_json.villages.length);
         //alert(animator_select_json.villages[0]);
         $("#id_animator_screening").change(function() {
        	 var vil_options = '<option value="">---------- </option>';
    	     for (var i = 0; i < animator_select_json.villages.length; i++) {
    	    	 //console.log(animator_select_json.villages[i].id);
    	    	 vil_options += '<option value="' + parseInt(animator_select_json.villages[i].id) + '">' + animator_select_json.villages[i].name + '</option>';
         	  }
    	      $("#id_village_screening").html(vil_options);
    	      console.log(vil_options);
         });
         $("#id_village_screening").change(function() {
    	      
    	     var group_options = '';
     	     for (var i = 0; i < animator_select_json.groups.length; i++) {
     	    	 //console.log(animator_select_json.villages[i].id);
     	    	group_options += '<option value="' + parseInt(animator_select_json.groups[i].id) + '">' + animator_select_json.groups[i].name + '</option>';
          	  }
     	      $("#id_group_screening").html(group_options);
     	      
     	     var person_options = '';
     	     for (var i = 0; i < animator_select_json.groups.length; i++) {
     	    	 //console.log(animator_select_json.villages[i].id);
     	    	person_options += '<option value="' + parseInt(animator_select_json.persons[i].id) + '">' + animator_select_json.persons[i].name + '</option>';
          	  }
     	      $("#id_person_screening").html(person_options);
         });
         
         
         $('#id_group_screening').click(function(){
        	 group_name = $('#id_group_screening option:selected').html();
        	 if(group_name) {
	        	 $('#id_group_screening option:selected').appendTo('#id_group_screening_right');
	        	 var persons_details = {"persons_in_group": 
	         		   [{"name": "Bhallapur", "id": 10000000000337, "videos_seen":[{"title": "SRI", "id":10000000000337}]}, 
	         	       {"name": "Dhanurjayapuram", "id": 10000000000336, "videos_seen":[{"title": "SRI", "id":10000000000337}]},
	         	       {"name": "Dhanur", "id": 10000000000335, "videos_seen":[{"title": "SRI", "id":10000000000337}]},
	         	       {"name": "Dha", "id": 10000000000334, "videos_seen":[{"title": "SRI", "id":10000000000337}]},
	         	       {"name": "yapuram", "id": 10000000000333, "videos_seen":[{"title": "SRI", "id":10000000000337}]},
	         	       {"name": "uram", "id": 10000000000332, "videos_seen":[{"title": "SRI", "id":10000000000337}]},
	         	       {"name": "Dhanuram", "id": 10000000000331, "videos_seen":[{"title": "SRI", "id":10000000000337}]},]
	         	   }
	         	  // pma_table = "";
	         	   for (var i = 0; i < persons_details.persons_in_group.length; i++) {
	        	    	 //console.log(animator_select_json.villages[i].id);
	         		  // pma_table += '<option value="' + parseInt(animator_select_json.persons[i].id) + '">' + animator_select_json.persons[i].name + '</option>';
	         		   $('#pma_table').find('tbody:last').append('<tr> <td><i class="icon-remove remove"></i></td> <td>  </td> <td> '+persons_details.persons_in_group[i].name+' </td> <td> <select> <option> PREPARATION OF ORGANIC UREA </option> </select> </td> <td > <div class="control-group"><div class="controls"><input name="question_asked_'+persons_details.persons_in_group[i].id+'" type="text" maxlength="500"> </div></div></td> <td> <input type="checkbox"> </td> </tr>');
	             	}
	         	   update_table();
	         	   add_remove_handler();
        	 }
        	});
         
         $('#id_person_screening').click(function(){
           person_name = $('#id_person_screening option:selected').html();
           person_id = $('#id_person_screening option:selected').val();
       	   if(person_name) {
	       		$('#id_person_screening option:selected').appendTo('#id_person_screening_right');
	        	$('#pma_table').find('tbody:last').append('<tr> <td><i class="icon-remove remove"></i></td> <td>  </td> <td> '+person_name+' </td> <td> <select> <option> PREPARATION OF ORGANIC UREA </option> </select> </td> <td> <input name="question_asked_'+person_id+'" type="text" maxlength="500"> </td> <td> <input type="checkbox"> </td> </tr>');
	       		update_table();
	       		add_remove_handler();
       	   }
         });
         	//For de selection of entries
        	/*$('#id_group_screening_right').click(function(){
        	    $('#id_group_screening_right option:selected').appendTo('#id_group_screening');
        	});*/
        	
        function add_remove_handler() {
        	$('.remove').click( function() {
               	$(this).closest('tr').remove();
               	update_table();
             });
        }
         
        function update_table() {
        	var i=0;
        	$("#pma_table tbody tr").each(function (){
        		$(this).find("td:nth-child(2)").html(i);
        		//add validation rule for question asked
        		console.log($(this).find("td:nth-child(5) input").rules("add",{allowedChar: true}));
        		//$("#"+$(this).attr('name')).rules("add",{maxlength: 10});
        		i++;
            });
        }
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
		
		$("#screening_form").validate({
			rules: {
				date_screening: {
					required: true,
					validateDate: true
				},
				start_time_screening: {
					required: true,
					validateTime: true
				},
				end_time_screening: {
					required: true,
					validateTime: true
				},
				animator_screening:"required",
				village_screening:"required",
				videos_screened_screening:"required",
				
			},
			messages: {
				date_screening: {
					required: 'Enter Screening Date',
					validateDate: 'Enter Screening Date in the form of yyyy-mm-dd',
				},
				start_time_screening: {
					required: 'Enter Video Production Start Date',
					validateTime: 'Enter the start time in the form of hh:mm  Use 24 hour format',
				},
				end_time_screening: {
					required: 'Enter Video Production End Date',
					validateTime: 'Enter the end time in the form of hh:mm  Use 24 hour format',
				},
				animator_screening: "Enter Animator",
				village_screening:"Enter Village",
				videos_screened_screening:"Enter Videos Screened",
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
	
	});
