import sublime
import sublime_plugin


class MarkdownFoldLinksCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.fold(self.view.find_by_selector("meta.link.inline markup.underline.link"))

    def is_enabled(self):
        return self.view.match_selector(0, "text.html.markdown")


class MarkdownLinkFolder(sublime_plugin.ViewEventListener):
    @classmethod
    def is_applicable(cls, settings):
        return settings.get("syntax").endswith("Markdown.sublime-syntax")

    def on_load(self):
        self.view.run_command("markdown_fold_links")

    on_post_save = on_load



# put this in the top level of your "User" package => "Preferences: Browse Packages" will open the directory in finder 
# video: https://www.youtube.com/watch?v=lBgDilqulxg
#
# additionally, add it to the command palatte by creating a new .sublime-commands file in the user package that looks like this:
# video: https://www.youtube.com/watch?v=2NNpWYw04zw
#
#
# [
#   {
#       "caption":"fold/collapse markdown links",
#       "command":"markdown_fold_links"
#   }
# ]
#
#