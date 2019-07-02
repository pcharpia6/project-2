/* eslint-disable prettier/prettier */

// AJAX contributor video submission
$("#contributor-video-submit").on("click", function(event) {
	event.preventDefault();

	var newVideo = {
		videoName: $("#video-name").val().trim(),
		gameName: $("#game-name").val().trim(),
		Genre: $("#genre").val().trim(),
		userName: $("#user-name").val().trim(),
		coachRequest: $("#coach-request:checked").trim(),
		Brag: $("#brag:checked").val(),
		contributorFeedback: $("#contributor-feedback:checked").val(),
		dontBeLikeMe: $("#dont-be-like-me:checked").val(),
		videoUrl: $("#video-url").val().trim().slice(-11)
	};

	console.log(newVideo);

	$.post("api/video", newVideo)
		.then(function() {
			$("#video-name").val("");
			$("#game-name").val("");
			$("#genre").val("");
			$("#user-name").val("");
			$("#coach-request").val("");
			$("#brag").val("");
			$("#contributor-feedback").val("");
			$("#dont-be-like-me").val("");
			$("#video-url").val("");
		});
});

// AJAX coach review submission
$("#coach-review-submit").on("click", function(event) {
	event.preventDefault();

	var newCoachReview = {
		userName: $("#user-name").val().trim(),
		Text: $("#text").val().trim(),
		Value: $("#ding-value").val().trim()
	};

	console.log(newCoachReview);

	$.post("api/coach-review", newCoachReview)
		.then(function() {
			$("#user-name").val("");
			$("#text").val("");
			$("#ding-value").val("");
		});
});

// AJAX contributor response to coach review
$("#contributor-response-coach-review-submit").on("click", function(event) {
	event.preventDefault();

	var newContributorResponseCoachReview = {
		userName: $("#user-name").val().trim(),
		Text: $("#text").val().trim(),
		Value: $("#ding-value").val().trim()
	};

	console.log(newContributorResponseCoachReview);

	$.post("api/coach-review", newContributorResponseCoachReview)
		.then(function() {
			$("#user-name").val("");
			$("#text").val("");
			$("#ding-value").val("");
		});
});

// AJAX new user submission
$("#new-user-submit").on("click", function(event) {
	event.preventDefault();

	var newUser = {
		userName: $("user-name").val().trim(),
		Description: $("description").val().trim()
	};

	console.log(newUser);

	$.post("#api/users", newUser)
		.then(function() {
			$("#user-name").val("");
			$("#description").val("");
		});
});